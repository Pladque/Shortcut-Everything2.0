class SearchElementStrategy{
    runStrategy(data){
        return this.strategy.runStrategy(data.savedShortCut);
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

}

const searchAlghorythmStrategyInstance = new SearchElementStrategy();

export {searchAlghorythmStrategyInstance as searchAlghorythmStrategy}