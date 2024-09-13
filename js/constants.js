const JOB_OPEN_PATH = "https://api.npoint.io/b55981b46615da93bb57";
const BLOG_LIST_PATH = "https://api.npoint.io/fd0b712706a4831d4be4";
const EXPERIENCE_BIN = "https://api.npoint.io/0e3f2bfc25c10713c03c";
const QUOTE_API_PATH = "http://api.quotable.io/random";
const DUMMY_QUOTE_API_PATH = "https://dummyjson.com/quotes/random";
const RANDOM_IMAGE = "https://picsum.photos/1000/400";

const JOB_OPEN_EDIT_PATH = "https://www.npoint.io/docs/b55981b46615da93bb57";
const BLOG_LIST_EDIT_PATH = "https://www.npoint.io/docs/fd0b712706a4831d4be4";
const EXPERIENCE_BIN_PATH = "https://www.npoint.io/docs/0e3f2bfc25c10713c03c";

const EXPERIENCE_START_DATE = "October 11, 2021";

function descriptionVal(values, limit) {
  var arr = values.split(" ");
  if (arr.length > limit) {
    return arr.slice(0, limit).join(" ") + "...";
  } else {
    return values;
  }
}
