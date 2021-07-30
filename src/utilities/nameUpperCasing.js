
function nameUpperCasing(name){

    const nameArray = name.split(' ');
    let result = ``;
    let eachName;

    nameArray.forEach((name)=>{
        eachName = name[0].toUpperCase();
        eachName += name.slice(1, name.length);
        result += eachName + ' ';
        eachName = '';
    })

    return result.trim();

}
export default nameUpperCasing