
function convertJSONtoCSV(object){
    if(!Array.isArray(object)){
        object = [object]
    }

    let csvString = "";

    const flattenRows = object.map((obj) => flattenObject(obj));

    const headers = Array.from(new Set(flattenRows.flatMap(row => Object.keys(row))));

    csvString += headers.join(",") + "\n";

    flattenRows.forEach((row) => {
        const values = headers.map((header) => row[header] !== undefined ? row[header] : "");
        csvString += values.join(",") + "\n";
    });

    return csvString;

    function flattenObject(obj){
        const result = {};

        function recurse(src,prop){
            if(Array.isArray(src)){
                src.forEach((item,index) => {
                    recurse(item,`${prop}[${index}]`);
                })
            }else if(typeof src === 'object'){
                for(const key in src){
                    if(src.hasOwnProperty(key)){
                        recurse(src[key],prop ? `${prop}.${key}` : key);
                    }
                }
            }else{
                result[prop] = src;
            }
        }

        recurse(obj,"");

        return result;
    }


}


const csvData = convertJSONtoCSV(jsonObject);

module.exports = convertJSONtoCSV;

