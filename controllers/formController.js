const FormData = require("../models/formModel");
const catchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/appError");

const getFormData = catchAsync(async (req, res, next) => {
  const data = await FormData.findOne();

  if (!data) {
    return next(new AppError("No form data found", 404));
  }

  res.status(200).json({
    status: "success",
    data,
  });
});

const createOrUpdateFormData = catchAsync(async (req, res, next) => {
  const { name, address, city, country, goods, color, weight } = req.body;

  if (!name || !address || !city || !country || !goods || !color || !weight) {
    return next(new AppError("Please provide all required fields", 400));
  }

  const formData = await FormData.findOneAndUpdate(
    {},
    { name, address, city, country, goods, color, weight },
    { upsert: true, new: true },
  );

  res.status(200).json({
    status: "success",
    data: formData,
  });
});

module.exports = {
  getFormData,
  createOrUpdateFormData,
};
