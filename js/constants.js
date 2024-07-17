const JOB_OPEN_PATH = "https://api.npoint.io/b55981b46615da93bb57";
const BLOG_LIST_PATH = "https://api.npoint.io/fd0b712706a4831d4be4";
const QUOTE_API_PATH = "https://api.quotable.io/random";
const ZEN_QUOTE_API_PATH = "https://zenquotes.io/api/random";
const RANDOM_IMAGE = "https://picsum.photos/1000/400";

const JOB_OPEN_EDIT_PATH = "https://www.npoint.io/docs/b55981b46615da93bb57";
const BLOG_LIST_EDIT_PATH = "https://www.npoint.io/docs/fd0b712706a4831d4be4";

function descriptionVal(values, limit) {
  var arr = values.split(" ");
  if (arr.length > limit) {
    return arr.slice(0, limit).join(" ") + "...";
  } else {
    return values;
  }
}
