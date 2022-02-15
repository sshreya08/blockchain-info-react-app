import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BlockDetail.css';
import { getSelectedBlockDetails } from '../actions/blocks';
import { useParams } from 'react-router-dom';

const BlockDetail = () => {
	const dispatch = useDispatch();
	let { id } = useParams();
	// initialize states
	const [blockDetails, setBlockDetails] = useState([]);

	// Get data from state
	const { data, error, loading } = useSelector((state) => state.blockDetails);
	console.log('data', data);
	const getSelectedBlock = useCallback(() => {
		dispatch(getSelectedBlockDetails(id));
	}, [dispatch]);

	useEffect(() => {
		getSelectedBlock();
	}, [getSelectedBlock]);
	return (
		<article className="block-details__card">
			<h3>Block details:</h3>
			<p>Block hash Id: {id}</p>
		</article>
	);
};

export default BlockDetail;
