const express = require("express");
const router = express.Router();
const {
    submitEnquiry, 
    getAllEnquiries,
    editEnquiryStatus,
    getSingleEnquiry,
    deleteEnquiry
} = require("../controllers/enquiryController");

router.post("/", submitEnquiry);
router.get("/", getAllEnquiries);
router.put("/:id", editEnquiryStatus);
router.delete("/:id", deleteEnquiry);
router.get("/:id", getSingleEnquiry);

module.exports = router;
