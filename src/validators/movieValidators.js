import { z } from "zod";

/**
 * Validation schema for creating a new movie
 * Validates title, releaseYear, and optional fields
 */
const createMovieSchema = z.object({
  title: z.string().trim().min(1, "Movie title is required"),
  releaseYear: z.coerce
    .number()
    .int("Release year must be an integer")
    .min(1888, "Release year must be a valid year")
    .max(new Date().getFullYear() + 10, "Release year must be a valid year"),
  overview: z.string().trim().optional(),
  genres: z
    .array(z.string(), { message: "All genres must be strings" })
    .optional(),
  runtime: z.coerce
    .number()
    .int("Runtime must be an integer")
    .positive("Runtime must be a positive number (in minutes)")
    .optional(),
  posterUrl: z.string().url("Poster URL must be a valid URL").optional(),
});

/**
 * Validation schema for updating a movie
 * All fields are optional, but if provided, must meet validation rules
 */
const updateMovieSchema = z.object({
  title: z.string().trim().min(1, "Title cannot be empty").optional(),
  releaseYear: z.coerce
    .number()
    .int("Release year must be an integer")
    .min(1888, "Release year must be a valid year")
    .max(new Date().getFullYear() + 10, "Release year must be a valid year")
    .optional(),
  overview: z.string().trim().optional(),
  genres: z
    .array(z.string(), { message: "All genres must be strings" })
    .optional(),
  runtime: z.coerce
    .number()
    .int("Runtime must be an integer")
    .positive("Runtime must be a positive number (in minutes)")
    .optional(),
  posterUrl: z.string().url("Poster URL must be a valid URL").optional(),
});

export { createMovieSchema, updateMovieSchema };
