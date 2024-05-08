import ProTypes from 'prop-types'
import { Component } from 'react'


class ChildComponent extends Component {
    static ProTypes = {
        name: ProTypes.string
    }

    static defaultProps = (function () {
        console.log('childComponent: defaultProps')
    })()

    constructor(props) {
        super(props)
        console.log('ChildComponent:state')
        this.state = { name: 'Mark' }
        this.oops = this.oops.bind(this)
    }

    oops() {
        this.setState(() => ({ oops: true }))
    }
    getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
        console.log('ChildComponent: getSnapshotBeforeUpdate', prevProps, prevState, snapshot)
    }
    getDerivedStateFromProps(nextProps, prevState) {
        console.log('ChildComponent: getDerivedStateFromProps', prevState, nextProps)
    }
    /*
    UNSAFE_componentWillMount() {
        console.log('ChildComponent : compentWillMount')
    }
    */
    componentDidMount() {
        console.log('childComponent: componentDidMount')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('ChildComponent: componentDidUpdate', prevProps, prevState)
    }
    render() {
        if (this.state.oops) {
            throw new Error('Something went wrong')
        }
        console.log('ChildComponent: render')
        return (
            <div key="name">Name : {this.state.name}</div>,
            <button key="error" onClick={this.oops}>Create error</button>
        )
    }
}

class ParentComponent extends Component {
    static defaultProps = (function () {
        console.log('ParentComponent: defaultProps')
        return {
            true: false
        }
    })()
    constructor(props) {
        super(props)
        this.state = { text: '' }
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch', error, info)
        console.error(error)
        console.error(info)
        this.setState(() => ({ error, info }))
    }

    /*
    UNSAFE_componentWillMount() {
        console.log('ParentComponent: componentWillMount')
    }
    */
    componentDidMount() {
        console.log('ParentComponent: componentDidMount')
    }
    onInputChange(e) {
        const text = e.target.value
        this.setState(() => ({ text: text }))
    }
    render() {
        console.log('PrarentComponent : render')
        if (this.state.error) {
            return (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.info.componentStack}
                </details>
            )
        }
        return [
            <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
            <input key="input" value={this.state.text} onChange={this.onInputChange} />,
            <ChildComponent key="ChildComponent" name={this.state.text} />
        ]
    }
}

export default ParentComponent