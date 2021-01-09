import React from 'react';

class CirclePaginator extends React.Component {
    state = { s:0 }
    scrollCoordsToPageIndex = []
    componentDidMount(){
        //TODO consider using ref
        const tdiv = document.getElementById("menuPageTopDiv");
        tdiv.addEventListener("scroll", this.cb);
    }
    componentWillUnmount() {
        const tdiv = document.getElementById("menuPageTopDiv");
        tdiv.removeEventListener("scroll", this.cb);
    }

    componentDidUpdate(prevProps){
        if(!this.props.numEntries){
            return;
        }

        if(prevProps.numEntries !== this.props.numEntries){
            this.buildRange(window.innerWidth);
        }
    }

    buildRange = windowInnerWidth => {
        const pageWidth = windowInnerWidth;
        const {numEntries} = this.props;
        const entries = [];
        for (let i = 0; i < numEntries; i++) {
            entries.push(pageWidth * i);
        }

        this.scrollCoordsToPageIndex = entries;
    }

    getIndexFromScrollCoords = (scrollLeft, direction) => {
        let index = -1;
        for(let i = 0; i < this.scrollCoordsToPageIndex.length - 1; i++){
            const cur = this.scrollCoordsToPageIndex[i];
            const next = this.scrollCoordsToPageIndex[i+1];

            if(scrollLeft > cur && scrollLeft < next){
                index = i;
                break;
            }
        }

        if(index === -1){
            return this.state.s;
        }

        return direction === "left" ? index : index+1;
    }

    cb = event => {
        //TODO debounce it;
        const scrollLeft = event.target.scrollLeft;
        const direction = scrollLeft > this.scrollLeft ? "right" : "left";
        this.scrollLeft = scrollLeft;

        const res = this.getIndexFromScrollCoords(scrollLeft, direction);

        if(this.state.s !== res){
            this.setState({s: res});
        }
    };

    genList = () => {
        const {numEntries} = this.props;
        const entries = [];
        for (let i = 0; i < numEntries; i++) {
            entries.push(<li
                key={i}
                className={this.state.s === i ? "active" : ""}
                onClick={()=>this.setState({s: this.state.s === i ? -1 : i})}><span></span></li>);
        }
        return entries;
    }

    render(){
        const {numEntries} = this.props;
        if(!numEntries){
            return null;
        }
    
        return <div className="pagination">
            <ul className="dots">
                {this.genList()}
            </ul>
        </div>
    }
  
}

export default CirclePaginator;