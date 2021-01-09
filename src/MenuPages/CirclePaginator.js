import React from 'react';

class CirclePaginator extends React.Component {
    state = { s:0 }
    componentDidMount(){
        //TODO consider using ref
        const tdiv = document.getElementById("menuPageTopDiv");
        tdiv.addEventListener("scroll", this.cb);
    }
    componentWillUnmount() {
        const tdiv = document.getElementById("menuPageTopDiv");
        tdiv.removeEventListener("scroll", this.cb);
    }

    cb = event => {
        const fromRight = event.target.scrollLeft;
        console.log('TODO', fromRight);
        // mainNavLinks.forEach(link => {
        //   let section = document.querySelector(link.hash);
      
        //   if (
        //     section.offsetTop <= fromTop &&
        //     section.offsetTop + section.offsetHeight > fromTop
        //   ) {
        //     // link.classList.add("current");
        //   } else {
        //     // link.classList.remove("current");
        //   }
        // });
    };

    genList = () => {
        const {numEntries} = this.props;
        const entries = [];
        for (let i = 1; i <= numEntries; i++) {
            entries.push(<li
                key={i}
                className={this.state.s===i ? "active" : ""}
                onClick={()=>this.setState({s: this.state.s === i ? 0 : i})}><span></span></li>);
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