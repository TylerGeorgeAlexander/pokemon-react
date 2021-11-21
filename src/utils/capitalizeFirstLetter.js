  // Make sure to invoke this on a then chain or async await
  export default function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }