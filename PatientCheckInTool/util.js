// NOTE: Convert to npm package (along with patientclientportal)

/**
 * @param {string[]} obj.select - Array of fields you want returned
 * @param {object[]} obj.filter - Array of filters you want to run on your call
 * @param {string} obj.id - Id of the entity you are searching for 
 * @param {string} obj.expandedEntity - Relationship name of expanded entity you want to return
 * @param {string[]} obj.expandedSelect - Array of fields you want returned from related entity
 * @param {object[]} obj.orderBy - Array of what you would like to order by -- {field: string, operator: string}
 * @param {number} obj.top - 
 * -NOTE-
 * filter object should be shaped as follows
 * {field: string, value :string}
 * 
 * Select is required as of now
 */
export const buildClientWebApiOptions = (obj) => {
    let string = "";
    string += buildSelectWebApi(obj.select)
    if (obj.orderBy) {

    }
    if (obj.top) {

    }
    if (obj.filter){
        string += buildFilterWebApi(obj.filter)
    }

    if (obj.expandedEntity) {

    }

    return string;
}

/**
 * @param {object[]} filterArray - Array of filter
 * In the array the object should looks like 
 * {field: string, value: string, operation: string}
 * Field being the field to filter on, value being what you are looking for
 */
 const buildFilterWebApi = (filterArray) => {
    let first = true
    let string = `$filter=`
    filterArray.forEach((filterItem)=>{
        if (!first){
            string += ' and '
        }
        if (filterItem.operation === "contains"){
            string += `contains(${filterItem.field}, '${filterItem.value}')`
        } else if (filterItem.operation === "eq"){
            string += `${filterItem.field} eq ${filterItem.value}`
        }
        first = false
    })
    return string
}

/**
 * @param {string[]} selectArray - array of strings to be parsed and returned
 * @param {boolean} isExpand - Flag for modified string for use in related entity select 
 */
const buildSelectWebApi = (selectArray, isExpand) => {
    let string
    if (isExpand){
        string = "$select=";
    }else {
        string = "?$select=";
    }
    let first = true;
    selectArray.forEach((option)=>{
        if (first){
            string += option
            first = false
        }
        else {
            string += "," + option
        }
    })
    return string
}

/**
 * 
 * @param {string} expandedEntity 
 * @param {string[]} expandedSelect 
 */
const buildExpandWebApi = () => {
    let string = '$expand=';
    string += relatedEntity;
    if (relatedSelect){
        string += `(${buildSelectString(relatedSelect, true)})`
    }
    return string
}
const buildTopWebApi = () => {
    
}

const buildOrderbyWebApi = () => {
    
}

