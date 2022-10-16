


class ClassPropertiesVerifier{

    // verifies if class (obj) has required properties
    verify(model, obj){
        const modelProperties =  Object.getOwnPropertyNames(model);
        const objProperties =  Object.getOwnPropertyNames(obj);

        var arrayLength = modelProperties.length;
        for (var i = 0; i < arrayLength; i++) {
            if(! objProperties[i].find(obj => {obj === modelProperties[i]})){
                return false;
            }
        }

        return true;

    }

}
