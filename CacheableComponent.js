import React from "react"

export default class CacheableComponent extends React.Component {
    render() {
        return <span>Hello, {this.props.name}!</span>;
    }

    componentCacheKey() {
        // the name prop completely specifies what the rendering will look like.
        return this.props.name;
    }
}
