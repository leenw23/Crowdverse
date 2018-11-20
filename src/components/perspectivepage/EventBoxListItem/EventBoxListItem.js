import React, { Component } from "react";
import "./EventBoxListItem.css";

class EventBoxListItem extends Component {
	render(){
  	const { data } = this.props;

		return (
			<div class="eventBox">
				<div class="eventUpperBox">
					<img src={data.imageName} class="eventUpperImageBox"/>
					<div class="eventUpperRightBox">
						<div class="eventUpperRightTitleBox"><span class="spanStyle">{data.title}</span></div>
					</div>
				</div>
				<div class="eventLowerBox">
					<div class="eventLowerContentBox">{data.content}</div>
				</div>
			</div>

		);
	}
}

export default EventBoxListItem;



			// <div class="eventBox">
			// 	<div class="eventImageBox">
		 //   		<img src={data.imageName} class="eventImage"/>
			// 	</div>
			// 	<div class="eventContentBox">
			// 		<div class="eventTitleBox">
			// 			<div class="eventContentTitle">{data.title}</div>
			// 		</div>
			// 		<div class="eventContentcontentBox">
			// 			<div class="eventContentContent">{data.content}</div>
			// 		</div>
			// 		<div class="eventFoldBox">
			// 			<div class="eventFoldText">Show national diversity in this event</div>
			// 		</div>
			// 	</div>
			// </div>