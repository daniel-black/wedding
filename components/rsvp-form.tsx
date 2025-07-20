"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/supabase/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react";
import { Alert, AlertTitle } from "./ui/alert";

// Guest type
interface Guest {
  id: string;
  first_name: string;
  full_name: string;
  group_id: string;
  rsvp: "yes" | "no" | null;
  reception_only: boolean;
}

type PartyAttendance = Array<Pick<Guest, "id" | "rsvp">>;

export default function RSVPForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [nameInput, setNameInput] = useState("");
  const [searchError, setSearchError] = useState("");
  const [foundGuest, setFoundGuest] = useState<Guest | null>(null);
  const [groupError, setGroupError] = useState("");
  const [party, setParty] = useState<Guest[]>([]);
  const [partyAttendance, setPartyAttendance] = useState<PartyAttendance>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rsvpComplete, setRsvpComplete] = useState(false);

  // Step 1: Search for guest
  async function searchName() {
    if (!nameInput || nameInput.length < 2) {
      setSearchError("Please enter at least 2 characters");
      return;
    }
    const supabase = createClient();
    const { data, error } = await supabase
      .from("rsvp_guest")
      .select("id,full_name,group_id,first_name,rsvp,reception_only")
      .ilike("full_name", `%${nameInput}%`)
      .limit(1);
    if (error) {
      setSearchError("Error searching for name");
      return;
    }
    if (!data || data.length === 0) {
      setSearchError(
        "No guests found with that name. Please text Stephanie or Dan for help."
      );
      return;
    }
    setFoundGuest(data[0]);
    setSearchError("");
    setStep(2);
  }

  // Step 2: Fetch party
  async function getGroupGuests() {
    if (!foundGuest) return;
    const supabase = createClient();
    const { data, error } = await supabase
      .from("rsvp_guest")
      .select("id,first_name,full_name,group_id,rsvp,reception_only")
      .eq("group_id", foundGuest.group_id)
      .order("full_name", { ascending: true });
    if (error) {
      setGroupError("Error finding your group");
      return;
    }
    setParty(data);
    setPartyAttendance(
      data.map((guest: Guest) => ({ id: guest.id, rsvp: guest.rsvp }))
    );
    setStep(3);
  }

  // Step 3: Submit RSVP
  async function savePartyRsvp() {
    if (partyAttendance.length === 0) return;
    setIsSubmitting(true);
    const supabase = createClient();
    const updates = partyAttendance
      .filter((guest) => guest.rsvp !== null)
      .map((guest) => ({ id: guest.id, rsvp: guest.rsvp }));
    const { error } = await supabase
      .from("rsvp_guest")
      .upsert(updates, { onConflict: "id" });
    setIsSubmitting(false);
    if (error) {
      alert("There was an error saving your RSVP. Please try again.");
    } else {
      setRsvpComplete(true);
    }
  }

  // Reset to step 1
  function resetForm() {
    setStep(1);
    setFoundGuest(null);
    setNameInput("");
    setParty([]);
    setPartyAttendance([]);
    setSearchError("");
    setGroupError("");
  }

  if (rsvpComplete) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-[300px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-semibold mb-2">Thank you!</div>
        <div className="text-muted-foreground text-lg text-center max-w-md mb-6">
          Your RSVP response has been recorded. We look forward to celebrating
          with you!
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link
              href="/travel"
              className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Travel Information
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link
              href="/things-to-do"
              className="inline-flex items-center justify-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
            >
              Things to Do
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-2xl">RSVP</CardTitle>
          <CardDescription>
            We&apos;re so excited to have you join us for our special day!
            Please fill out the form below to let us know if you can make it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <CalendarIcon />
            <AlertTitle>Please RSVP by March 29th, 2026.</AlertTitle>
          </Alert>
          <Accordion type="single" value={`step${step}`} collapsible>
            {/* Step 1: Search */}
            <AccordionItem value="step1">
              <AccordionTrigger>
                <div className="flex items-center">
                  <span className="rounded-full bg-muted text-foreground font-mono text-lg w-8 h-8 flex items-center justify-center font-bold mr-3 border border-border">
                    1
                  </span>
                  <span className="text-xl font-semibold">Search</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-1 mb-4">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await searchName();
                  }}
                  className="space-y-4"
                >
                  <Label htmlFor="name">Please enter your full name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={nameInput}
                    onChange={(e) => {
                      setNameInput(e.target.value);
                      setSearchError("");
                    }}
                    placeholder="First Last"
                    autoFocus
                  />
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <Button type="submit" className="w-full">
                      Find my invitation
                    </Button>
                  </motion.div>
                  <AnimatePresence>
                    {searchError && (
                      <motion.div
                        className="text-destructive text-sm mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {searchError}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </AccordionContent>
            </AccordionItem>

            {/* Step 2: Confirm */}
            <AccordionItem value="step2">
              <AccordionTrigger disabled={step < 2}>
                <div className="flex items-center">
                  <span className="rounded-full bg-muted text-foreground font-mono text-lg w-8 h-8 flex items-center justify-center font-bold mr-3 border border-border">
                    2
                  </span>
                  <span className="text-xl font-semibold">Confirm</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-1 mb-4">
                {foundGuest && (
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2">Found:</div>
                      <div className="text-xl font-bold mb-4 font-display">
                        {foundGuest.full_name}
                      </div>
                      <div>Is this you?</div>
                    </div>
                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="flex-1"
                      >
                        <Button onClick={getGroupGuests} className="w-full">
                          Yes
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          onClick={resetForm}
                          className="w-full"
                        >
                          No
                        </Button>
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {groupError && (
                        <motion.div
                          className="text-destructive text-sm mt-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {groupError}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Step 3: Submit */}
            <AccordionItem value="step3">
              <AccordionTrigger disabled={step < 3}>
                <div className="flex items-center">
                  <span className="rounded-full bg-muted text-foreground font-mono text-lg w-8 h-8 flex items-center justify-center font-bold mr-3 border border-border">
                    3
                  </span>
                  <span className="text-xl font-semibold">Submit</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-1 mb-4">
                {party.length > 0 && (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      await savePartyRsvp();
                    }}
                    className="space-y-4"
                  >
                    <div>
                      Please indicate who in your party will be attending.
                    </div>
                    <div className="space-y-2">
                      {party.map((guest, idx) => (
                        <div key={guest.id} className="flex items-center gap-2">
                          <Checkbox
                            id={`guest-${guest.id}`}
                            checked={partyAttendance[idx]?.rsvp === "yes"}
                            onCheckedChange={(checked: boolean) => {
                              const newAttendance = partyAttendance.map(
                                (att, i) =>
                                  i === idx
                                    ? {
                                        ...att,
                                        rsvp: checked
                                          ? ("yes" as const)
                                          : ("no" as const),
                                      }
                                    : att
                              );
                              setPartyAttendance(newAttendance);
                            }}
                          />
                          <Label htmlFor={`guest-${guest.id}`}>
                            {guest.full_name}
                            {guest.reception_only && (
                              <span className="text-muted-foreground">
                                {" "}
                                (Reception Only)
                              </span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Saving..." : "Submit RSVP"}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
}
