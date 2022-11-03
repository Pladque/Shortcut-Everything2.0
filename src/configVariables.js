// @DESC: Attributes in HTML tag that will not be considered during search 
const ATTRIBIUTES_TO_SKIP = ["href", "src"]  

// @DESC: Tags that are not clickable, Alghorythm should avoid saving html elements with those tags
const NOT_WORKING_TAGS = ["svg", "ellipse", "path"]

// @DESC: Html tags that requires to be selected, not clicked (element.click() doesnt work)
const TAGS_TO_SELECT = ["input"]

// @TRUE: Every element on the website will be considered as potential match
// @FALSE: Only Elements with matching tag will be considered
const SEARCH_FULL = true        

const autoCheckInnerTextChange = true;


export{
    ATTRIBIUTES_TO_SKIP,
    NOT_WORKING_TAGS,
    TAGS_TO_SELECT,
    SEARCH_FULL,
    autoCheckInnerTextChange
}