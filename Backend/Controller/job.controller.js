import jobmodel from "../Models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobtype,
      experienceLevel,
      numberOfPosition,
      company,
      createdBy,
      applicants,
    } = req.body;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobtype ||
      !experienceLevel ||
      !position ||
      !company
    ) {
      return res.status(400).json({
        message: "Missing required field",
        success: false,
      });

      const job = await createImageBitmap({
        title,
        description,
        requirements: requirements.split(","),
        salary: Number(salary),
        location,
        jobtype,
        experienceLevel: experience,
        position,
        company: companyId,
      });

      return res.status(201).json({
        message: "job post sucess fully",
        job,
        success: true,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "server error",
      success: "false",
    });
  }
};

export const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $reger: keyword, $options: "i" } },
        { description: { $reger: keyword, $options: "i" } },
      ],
    };
    const jobs = await job.find(query);
    if (!jobs) { 
      return res.status(404).josn({
        message: "job not found",
        success: false,
      });
    }
 
    return res.status(201).json({
      message: "job post sucess fully",
      jobs,
      success: true, 
    });
    
  } catch {}
};
