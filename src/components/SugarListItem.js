import React from "react";
import Div from "@vkontakte/vkui/dist/es6/components/Div/Div";

import gluko from '../img/gluko.png'
import Text from "@vkontakte/vkui/dist/es6/components/Typography/Text/Text";
import Icon16Clear from '@vkontakte/icons/dist/16/clear';

class SugarListItem extends React.Component {

    render() {
        return (
            <Div style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }
            }>
                <img src={gluko} alt='glukometer' style={
                    {
                        width: '48px',
                        height: '48px',
                    }
                }/>

                <Text weight='semibold' style={
                    {
                        fontSize: '16px'
                    }
                }>
                    {this.props.val} ммоль/л
                </Text>

                <Text weight='semibold' style={
                    {
                        fontSize: '16px',
                        color: '#909499'
                    }
                }>
                    {this.props.date}
                </Text>

                <Icon16Clear width={20} height={20} style={{color:'red'}}/>
            </Div>
        )
    }
}

export default SugarListItem
