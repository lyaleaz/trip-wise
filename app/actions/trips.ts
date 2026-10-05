"use server";

import { prisma } from "@/lib/prisma";

export type CreateTripInput = {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number | string;
  budget: number | string;
  interests: string[];
  pace: string;
  accommodation: string;
  transportation: string;
};

export type CreateTripResult =
  | { success: true; tripId: number }
  | { success: false; error: string };

function parseDate(value: string): Date | null {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
}

function parseInteger(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsed) || !Number.isInteger(parsed)) {
    return null;
  }

  return parsed;
}

function parseNumber(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : Number.parseFloat(String(value));

  if (!Number.isFinite(parsed)) {
    return null;
  }

  return parsed;
}

export async function createTrip(
  input: CreateTripInput,
): Promise<CreateTripResult> {
  const destination = input.destination?.trim();

  if (!destination) {
    return { success: false, error: "Destination is required." };
  }

  if (!input.startDate) {
    return { success: false, error: "Start date is required." };
  }

  if (!input.endDate) {
    return { success: false, error: "End date is required." };
  }

  const startDate = parseDate(input.startDate);

  if (!startDate) {
    return { success: false, error: "Start date is invalid." };
  }

  const endDate = parseDate(input.endDate);

  if (!endDate) {
    return { success: false, error: "End date is invalid." };
  }

  if (endDate < startDate) {
    return {
      success: false,
      error: "End date must be on or after the start date.",
    };
  }

  const travelers = parseInteger(input.travelers);

  if (travelers === null || travelers < 1) {
    return {
      success: false,
      error: "Number of travelers must be at least 1.",
    };
  }

  const budget = parseNumber(input.budget);

  if (budget === null || budget < 0) {
    return { success: false, error: "Budget must be zero or greater." };
  }

  if (!Array.isArray(input.interests) || input.interests.length === 0) {
    return {
      success: false,
      error: "Please select at least one interest.",
    };
  }

  const interests = input.interests
    .map((interest) => interest.trim())
    .filter(Boolean);

  if (interests.length === 0) {
    return {
      success: false,
      error: "Please select at least one interest.",
    };
  }

  const pace = input.pace?.trim();

  if (!pace) {
    return { success: false, error: "Travel pace is required." };
  }

  const accommodation = input.accommodation?.trim();

  if (!accommodation) {
    return { success: false, error: "Accommodation is required." };
  }

  const transportation = input.transportation?.trim();

  if (!transportation) {
    return { success: false, error: "Transportation is required." };
  }

  try {
    const trip = await prisma.trip.create({
      data: {
        destination,
        startDate,
        endDate,
        travelers,
        budget,
        interests,
        pace,
        accommodation,
        transportation,
      },
    });

    return { success: true, tripId: trip.id };
  } catch (error) {
    console.error("Failed to create trip:", error);

    return {
      success: false,
      error: "Unable to save trip. Please try again.",
    };
  }
}
