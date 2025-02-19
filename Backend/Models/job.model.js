import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  requirements: [{
    type: String,
    required: true,
  },],

  salary: {
    type: String,
    required: true,
  },

  experienceLevel: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  jobtype: {
    type: String,
    required: true,
  },

  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
    required: true,
  },

  position: {
    type: Number,
    required: true,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  applicants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
},

{ timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
