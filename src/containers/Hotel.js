import React, {Component} from "react";
import HotelDetails from "../components/HotelDetails";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HotelActions from "../actions/HotelActions";

class Hotel extends Component {
    constructor(props) {
        super(props);
        // Fetch hotel details from list of hotels
        let hotelPrices = {...props.prices[props.params.hotelId]}
        let hotelDetails = {...props.hotels[props.params.hotelId]};
        hotelDetails.prices = hotelPrices;
        this.state = {hotel: hotelDetails}
    }
    componentDidMount() {
        // Fetch hotel updated details
        this.props.getHotelDetails(this.props.params.hotelId);
    }
    componentWillReceiveProps(nextProps) {
        // Update state with hotel complete details
        if (JSON.stringify(nextProps.hotels) !== JSON.stringify((this.props.hotels))) {
            let hotelPrices = {...nextProps.prices[nextProps.params.hotelId]}
            let hotelDetails = {...nextProps.hotels[nextProps.params.hotelId]};
            hotelDetails.prices = hotelPrices;
            this.setState({hotel: hotelDetails});
        }
    }
    render() {
        let {hotel} = this.state;
        return <div>
            {hotel && <HotelDetails hotel={hotel}/>}
        </div>
    }
}


const mapStateToProps = (state, props) => {
    return {
        hotels: state.hotel.hotelList,
        prices: state.hotel.hotelPricesList,
    }
}

const mapDispatchToPros = (dispatch, props) => {
    return bindActionCreators({
        getHotelDetails: HotelActions.getHotelDetails,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPros)(Hotel);