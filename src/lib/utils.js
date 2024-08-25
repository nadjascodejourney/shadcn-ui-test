// src/lib/utils.js

/**
 * Conditional class naming utility function
 *
 * @param {...string} args - Variable number of arguments
 * @returns {string} Conditionally applied class names
 */
function cn(...args) {
  let result = "";

  // Iterate over each argument
  args.forEach((arg) => {
    // Check if the argument is a string
    if (typeof arg === "string") {
      // Split the string into individual classes
      const classes = arg.split(/[\s,]+/);

      // Add each class to the result
      classes.forEach((cls) => {
        if (cls && cls.trim()) {
          result += `${result ? " " : ""}${cls}`;
        }
      });
    }

    // Check if the argument is an object
    else if (typeof arg === "object" && arg !== null) {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          result += `${result ? " " : ""}${key}`;
        }
      });
    }
  });

  return result;
}

// Export the cn function
export { cn };
