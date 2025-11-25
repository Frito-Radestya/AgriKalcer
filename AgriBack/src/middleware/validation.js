/**
 * Basic input validation helpers
 */

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateDate(dateString) {
  const date = new Date(dateString)
  return date instanceof Date && !isNaN(date) && dateString.match(/^\d{4}-\d{2}-\d{2}$/)
}

export function validatePositiveNumber(value) {
  const num = parseFloat(value)
  return !isNaN(num) && num > 0
}

export function validateNonNegativeNumber(value) {
  const num = parseFloat(value)
  return !isNaN(num) && num >= 0
}

export function validateEnum(value, allowedValues) {
  return allowedValues.includes(value)
}

export function validateStringLength(str, min = 0, max = Infinity) {
  if (typeof str !== 'string') return false
  return str.length >= min && str.length <= max
}

/**
 * Middleware to validate finance creation/update
 */
export function validateFinance(req, res, next) {
  const { type, amount, date, category } = req.body

  // Validate type
  if (type && !validateEnum(type, ['income', 'expense'])) {
    return res.status(400).json({ message: 'Type must be "income" or "expense"' })
  }

  // Validate amount
  if (amount !== undefined && !validatePositiveNumber(amount)) {
    return res.status(400).json({ message: 'Amount must be a positive number' })
  }

  // Validate date
  if (date && !validateDate(date)) {
    return res.status(400).json({ message: 'Date must be in YYYY-MM-DD format' })
  }

  // Validate category length
  if (category && !validateStringLength(category, 0, 100)) {
    return res.status(400).json({ message: 'Category must be 100 characters or less' })
  }

  next()
}

/**
 * Middleware to validate harvest creation/update
 */
export function validateHarvest(req, res, next) {
  const { amount, pricePerKg, date } = req.body

  // Validate amount
  if (amount !== undefined && !validatePositiveNumber(amount)) {
    return res.status(400).json({ message: 'Amount must be a positive number' })
  }

  // Validate pricePerKg
  if (pricePerKg !== undefined && !validatePositiveNumber(pricePerKg)) {
    return res.status(400).json({ message: 'Price per kg must be a positive number' })
  }

  // Validate date
  if (date && !validateDate(date)) {
    return res.status(400).json({ message: 'Date must be in YYYY-MM-DD format' })
  }

  next()
}

/**
 * Middleware to validate maintenance creation/update
 */
export function validateMaintenance(req, res, next) {
  const { type, date, cost } = req.body

  // Validate type
  if (type && !validateStringLength(type, 1, 100)) {
    return res.status(400).json({ message: 'Type must be 1-100 characters' })
  }

  // Validate date
  if (date && !validateDate(date)) {
    return res.status(400).json({ message: 'Date must be in YYYY-MM-DD format' })
  }

  // Validate cost (can be 0 or positive)
  if (cost !== undefined && !validateNonNegativeNumber(cost)) {
    return res.status(400).json({ message: 'Cost must be a non-negative number' })
  }

  next()
}

/**
 * Middleware to validate plant creation/update
 */
export function validatePlant(req, res, next) {
  const { name, planting_date, status } = req.body

  // Validate name
  if (name && !validateStringLength(name, 1, 100)) {
    return res.status(400).json({ message: 'Name must be 1-100 characters' })
  }

  // Validate date
  if (planting_date && !validateDate(planting_date)) {
    return res.status(400).json({ message: 'Planting date must be in YYYY-MM-DD format' })
  }

  // Validate status
  if (status && !validateEnum(status, ['active', 'harvested', 'failed', 'dormant'])) {
    return res.status(400).json({ message: 'Status must be one of: active, harvested, failed, dormant' })
  }

  next()
}

/**
 * Middleware to validate land creation/update
 */
export function validateLand(req, res, next) {
  const { name, area_size } = req.body

  // Validate name
  if (name && !validateStringLength(name, 1, 100)) {
    return res.status(400).json({ message: 'Name must be 1-100 characters' })
  }

  // Validate area_size (can be null or positive)
  if (area_size !== undefined && area_size !== null && !validatePositiveNumber(area_size)) {
    return res.status(400).json({ message: 'Area size must be a positive number' })
  }

  next()
}

