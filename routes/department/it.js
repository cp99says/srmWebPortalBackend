const express = require("express");
const app = express();
const verify_post = require("./../../routes/ktr_socp_post_it");
const verify_get = require("./../../routes/ktr_socp_get");
const it_schema = require("../../models/userDefined/studentDetails_socp_it");
const facultySchema = require("../../models/userDefined/ktr_facultyDetails_socp_it");
const campus = require("../../models/predefined/campus");
const dept = require("../../models/predefined/dept");
const school = require("../../models/predefined/schools");
const it_placement = require("./../../models/userDefined/ktr_placementDetails_socp_it");
const higher_studies = require("./../../models/userDefined/ktr_higher_Studies_socp_it");
const visitor_details = require("./../../models/userDefined/ktr_visitorDetails_socp_it");
const patent = require("./../../models/userDefined/ktr_patentDetails_socp_it");
const project = require("./../../models/userDefined/ktr_projectDetails_socp_it");
const publication = require("./../../models/userDefined/ktr_publicationDetails_socp_it");
const student_activity = require("../../models/userDefined/ktr_studentActivities_socp_it");
const multer = require("multer");
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/ktr/socp/it");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({
  storage: multerStorage,
});
const uploadUserphoto = upload.any("file");

app.post("/student_details", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new it_schema({
        ug1: req.body.ug1,
        ug2: req.body.ug2,
        ug3: req.body.ug3,
        ug4: req.body.ug4,
        pg1: req.body.pg1,
        pg2: req.body.pg2,
        phdi: req.body.phdi,
        phde: req.body.phde,
        phdf: req.body.phdf,
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;
      const a = new it_schema({
        ug1: req.body.ug1,
        ug2: req.body.ug2,
        ug3: req.body.ug3,
        ug4: req.body.ug4,
        pg1: req.body.pg1,
        pg2: req.body.pg2,
        phdi: req.body.phdi,
        phde: req.body.phde,
        phdf: req.body.phdf,
        email: req.body.email,
        file: original,
      });
      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});
app.get("/student_details", verify_get, async (req, res) => {
  try {
    const data = await it_schema.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/faculty_details", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new facultySchema({
        af: req.body.af,
        profs: req.body.profs,
        assProfs: req.body.profs,
        apWithPhd: req.body.apWithPhd,
        apWithoutPhd: req.body.apWithoutPhd,
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new facultySchema({
        af: req.body.af,
        profs: req.body.profs,
        assProfs: req.body.profs,
        apWithPhd: req.body.apWithPhd,
        apWithoutPhd: req.body.apWithoutPhd,
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/faculty_details", verify_get, async (req, res) => {
  try {
    const data = await facultySchema.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/placement_details", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new it_placement({
        third_year: {
          eligible: req.body.third_year.eligible,
          internship: req.body.third_year.internship,
          placed: req.body.third_year.placed,
          higher_studies: req.body.third_year.higher_studies,
        },
        fourth_year: {
          eligible: req.body.fourth_year.eligible,
          internship: req.body.fourth_year.internship,
          placed: req.body.fourth_year.placed,
          higher_studies: req.body.fourth_year.higher_studies,
        },
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new it_placement({
        third_year: {
          eligible: req.body.third_year.eligible,
          internship: req.body.third_year.internship,
          placed: req.body.third_year.placed,
          higher_studies: req.body.third_year.higher_studies,
        },
        fourth_year: {
          eligible: req.body.fourth_year.eligible,
          internship: req.body.fourth_year.internship,
          placed: req.body.fourth_year.placed,
          higher_studies: req.body.fourth_year.higher_studies,
        },
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/placement_details", verify_get, async (req, res) => {
  try {
    const data = await it_placement.find();
    const data2 = await campus.find({ campus_code: "1" }, (err, doc) => {
      // console.log(doc)
    });
    const data3 = await dept.find({ dept_code: "2" }, (err, doc) => {
      // console.log(doc)
    });
    const data4 = await school.find({ school_code: "7" }, (err, doc) => {
      // console.log(doc)
    });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    //console.log(err)
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/higher_studies", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new higher_studies({
        students_went_for_higher_studies:
          req.body.students_went_for_higher_studies,
        universityName: req.body.universityName,
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new higher_studies({
        students_went_for_higher_studies:
          req.body.students_went_for_higher_studies,
        universityName: req.body.universityName,
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/higher_studies", verify_get, async (req, res) => {
  try {
    const data = await higher_studies.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/visitor_details", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new visitor_details({
        academicians: {
          visited_campus: req.body.academicians.visited_campus,
          online: req.body.academicians.online,
        },
        alumni: {
          visited_campus: req.body.alumni.visited_campus,
          online: req.body.alumni.online,
        },
        industrialists: {
          visited_campus: req.body.industrialists.visited_campus,
          online: req.body.industrialists.online,
        },
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new visitor_details({
        academicians: {
          visited_campus: req.body.academicians.visited_campus,
          online: req.body.academicians.online,
        },
        alumni: {
          visited_campus: req.body.alumni.visited_campus,
          online: req.body.alumni.online,
        },
        industrialists: {
          visited_campus: req.body.industrialists.visited_campus,
          online: req.body.industrialists.online,
        },
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/visitor_details", verify_get, async (req, res) => {
  try {
    const data = await visitor_details.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/patent_details", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new patent({
        patents_filed: {
          target: req.body.patents_filed.target,
          actual: req.body.patents_filed.actual,
        },
        patents_published: {
          target: req.body.patents_published.target,
          actual: req.body.patents_published.actual,
        },
        patents_granted: {
          target: req.body.patents_granted.target,
          actual: req.body.patents_granted.actual,
        },
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new patent({
        patents_filed: {
          target: req.body.patents_filed.target,
          actual: req.body.patents_filed.actual,
        },
        patents_published: {
          target: req.body.patents_published.target,
          actual: req.body.patents_published.actual,
        },
        patents_granted: {
          target: req.body.patents_granted.target,
          actual: req.body.patents_granted.actual,
        },
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/patent_details", verify_get, async (req, res) => {
  try {
    const data = await patent.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/project_details", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new project({
        funded_projects: {
          target: req.body.funded_projects.target,
          applied: req.body.funded_projects.applied,
          ongoing: req.body.funded_projects.ongoing,
          completed: req.body.funded_projects.completed,
          amount_received: req.body.funded_projects.amount_received,
        },
        consultancy_projects: {
          target: req.body.consultancy_projects.target,
          applied: req.body.consultancy_projects.applied,
          ongoing: req.body.consultancy_projects.ongoing,
          completed: req.body.consultancy_projects.completed,
          amount_received: req.body.consultancy_projects.amount_received,
        },
        inhouse_projects: {
          target: req.body.inhouse_projects.target,
          applied: req.body.inhouse_projects.applied,
          ongoing: req.body.inhouse_projects.ongoing,
          completed: req.body.inhouse_projects.completed,
          amount_received: req.body.inhouse_projects.amount_received,
        },
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new project({
        funded_projects: {
          target: req.body.funded_projects.target,
          applied: req.body.funded_projects.applied,
          ongoing: req.body.funded_projects.ongoing,
          completed: req.body.funded_projects.completed,
          amount_received: req.body.funded_projects.amount_received,
        },
        consultancy_projects: {
          target: req.body.consultancy_projects.target,
          applied: req.body.consultancy_projects.applied,
          ongoing: req.body.consultancy_projects.ongoing,
          completed: req.body.consultancy_projects.completed,
          amount_received: req.body.consultancy_projects.amount_received,
        },
        inhouse_projects: {
          target: req.body.inhouse_projects.target,
          applied: req.body.inhouse_projects.applied,
          ongoing: req.body.inhouse_projects.ongoing,
          completed: req.body.inhouse_projects.completed,
          amount_received: req.body.inhouse_projects.amount_received,
        },
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/project_details", verify_get, async (req, res) => {
  try {
    const data = await project.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/publication_details", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new publication({
        papers_in_scopus: {
          target: req.body.papers_in_scopus.target,
          actual: req.body.papers_in_scopus.actual,
        },
        papers_in_sci: {
          target: req.body.papers_in_sci.target,
          actual: req.body.papers_in_sci.actual,
        },
        highest_impact_factor: req.body.highest_impact_factor,
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new publication({
        papers_in_scopus: {
          target: req.body.papers_in_scopus.target,
          actual: req.body.papers_in_scopus.actual,
        },
        papers_in_sci: {
          target: req.body.papers_in_sci.target,
          actual: req.body.papers_in_sci.actual,
        },
        highest_impact_factor: req.body.highest_impact_factor,
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/publication_details", verify_get, async (req, res) => {
  try {
    const data = await publication.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

app.post("/student_activities", verify_post, (req, res) => {
  uploadUserphoto(req, res, async (err) => {
    if (!req.files.length) {
      var original = "null";
      const a = new student_activity({
        hackathon: {
          participated: req.body.hackathon.participated,
          won: req.body.hackathon.won,
          total_cash_prize: req.body.hackathon.total_cash_prize,
        },
        awards: {
          international: req.body.awards.international,
          national: req.body.awards.national,
        },
        internship: {
          with_stipend: req.body.internship.with_stipend,
          without_stipend: req.body.internship.without_stipend,
        },
        email: req.body.email,
        //file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    } else {
      var b = req.files["0"];
      let c = b[b.length - 1];
      var original = b.originalname;

      const a = new student_activity({
        hackathon: {
          participated: req.body.hackathon.participated,
          won: req.body.hackathon.won,
          total_cash_prize: req.body.hackathon.total_cash_prize,
        },
        awards: {
          international: req.body.awards.international,
          national: req.body.awards.national,
        },
        internship: {
          with_stipend: req.body.internship.with_stipend,
          without_stipend: req.body.internship.without_stipend,
        },
        email: req.body.email,
        file: original,
      });

      try {
        const data = await a.save();
        res.status(201).json(data);
      } catch (err) {
        console.log(err);
        res.status(401).json({
          message: "failure",
          err,
        });
      }
    }
  });
});

app.get("/student_activities", verify_get, async (req, res) => {
  try {
    const data = await student_activity.find();
    const data2 = await campus.find({ campus_code: "1" });
    const data3 = await dept.find({ dept_code: "2" });
    const data4 = await school.find({ school_code: "7" });
    res.status(201).json({
      message: "success",
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    res.status(401).json({
      message: "failure",
      err,
    });
  }
});

module.exports = app;
