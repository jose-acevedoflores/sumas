import React from 'react';

class CirclePaginator extends React.Component {
    state = { pageNum:0 };
    scrollCoordsToPageIndex = [];
    scrollCoordsToPageIndexRev = [];

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
        const entriesRev = [];
        for (let i = 0; i < numEntries; i++) {
            entries.push(pageWidth * i);
            entriesRev.push((numEntries-i-1) * pageWidth)
        }

        this.scrollCoordsToPageIndex = entries;
        this.scrollCoordsToPageIndexRev = entriesRev;
    }

    getIndexFromScrollCoords = (scrollLeft, direction) => {
        const {numEntries} = this.props;
        return direction === "right"
            ? numEntries - this.scrollCoordsToPageIndexRev.findIndex(cur => scrollLeft > cur)
            : this.scrollCoordsToPageIndex.findIndex(cur => scrollLeft < cur) - 1
    }

    cb = event => {
        //TODO debounce it;
        const scrollLeft = event.target.scrollLeft;
        const direction = scrollLeft > this.scrollLeft ? "right" : "left";
        this.scrollLeft = scrollLeft;

        const res = this.getIndexFromScrollCoords(scrollLeft, direction);

        if(this.state.pageNum !== res){
            this.setState({pageNum: res});
        }
    };

    genList = () => {
        const {numEntries} = this.props;
        const entries = [];
        for (let i = 0; i < numEntries; i++) {
            entries.push(<li
                key={i}
                className={this.state.pageNum === i ? "active" : ""}
                ><span></span></li>);
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