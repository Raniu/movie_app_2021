import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        //url 직접 입력했을 때 state 키 비어 있는 경우 해결
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>;
        }else {
            return null;
        }
    }
}

export default Detail;