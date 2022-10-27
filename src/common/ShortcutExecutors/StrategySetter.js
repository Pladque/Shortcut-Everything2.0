import { autoCheckInnerTextChange, SEARCH_FULL } from "../../configVariables";

const { SearchElementLifebuoyStrategy, SearchElementAutoCheckInnerTextStrategy, SearchElementFullSearchStrategy, SearchElementBasicStrategy } = require("./Strategies");
const { searchAlghorythmStrategy } = require("./SearchElementStrategy");


// #5 Strategia
export class StrategySetter{

    constructor(searchAlghorythm){
        this.searchAlghorythm = searchAlghorythm;
    }

    setStrategy(){
        if(autoCheckInnerTextChange && SEARCH_FULL){
            searchAlghorythmStrategy.setStrategy(new SearchElementLifebuoyStrategy(this.searchAlghorythm));
        }else if(autoCheckInnerTextChange){
            searchAlghorythmStrategy.setStrategy(new SearchElementAutoCheckInnerTextStrategy(this.searchAlghorythm));
        }else if (SEARCH_FULL){
            searchAlghorythmStrategy.setStrategy(new SearchElementFullSearchStrategy(this.searchAlghorythm));
        }else{
            searchAlghorythmStrategy.setStrategy(new SearchElementBasicStrategy(this.searchAlghorythm));
        }

    }

}