import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const RegistrationSchema = z.object({
  parent_name: z.string().trim().min(1, "Meno je povinné").max(200),
  parent_email: z.string().trim().email("Neplatný email").max(320),
  parent_phone: z.string().trim().min(3).max(40).optional().or(z.literal("")),
  child_name: z.string().trim().max(200).optional().or(z.literal("")),
  child_age: z
    .union([z.coerce.number().int().min(8).max(16), z.literal("")])
    .optional(),
  child_email: z.string().trim().email("Neplatný email").max(320).optional().or(z.literal("")),
  child_phone: z.string().trim().max(40).optional().or(z.literal("")),
  preferred_turnus: z.enum(["first", "second", "any", "other"]),
  preferred_turnus_other: z.string().trim().max(500).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type RegistrationInput = z.infer<typeof RegistrationSchema>;

export const submitRegistration = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => RegistrationSchema.parse(input))
  .handler(async ({ data }) => {
    const payload = {
      parent_name: data.parent_name,
      parent_email: data.parent_email,
      parent_phone: data.parent_phone ? data.parent_phone : null,
      child_name: data.child_name ? data.child_name : null,
      child_age:
        typeof data.child_age === "number" && !Number.isNaN(data.child_age)
          ? data.child_age
          : null,
      child_email: data.child_email ? data.child_email : null,
      child_phone: data.child_phone ? data.child_phone : null,
      preferred_turnus: data.preferred_turnus,
      preferred_turnus_other: data.preferred_turnus_other ? data.preferred_turnus_other : null,
      notes: data.notes ? data.notes : null,
    };

    const { error } = await supabase.from("registrations").insert(payload);

    if (error) {
      console.error("Registration insert failed:", error);
      return { ok: false as const, error: "Prihlášku sa nepodarilo odoslať. Skúste znova." };
    }

    return { ok: true as const };
  });
