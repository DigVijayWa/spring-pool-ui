import React,{Component} from 'react';

class Pool extends Component {


	render() {
		return (
			<tr>
				<td>{this.props.pool.poolName}</td>
				<td>{this.props.pool.buildingName}</td>
				<td>{this.props.pool.floorNo}</td>
				<td>{this.props.pool.poolCondition}</td>
				<td>{this.props.pool.available}</td>
			</tr>
		)
	}
}
export default Pool;