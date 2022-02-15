import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getLatestBlocks } from '../actions/blocks';
import './LatestBlocks.css';
import Table from './common/table';
import styled from 'styled-components';

const Styles = styled.div`
	table {
		border-spacing: 0;
		border: 1px solid black;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
			:hover {
				cursor: pointer;
				background-color: grey;
			}
		}

		th,
		td {
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}

		th {
			background: #20639b;
			color: white;
			fontweight: bold;
		}
	}
`;

const LatestBlocks = () => {
	const dispatch = useDispatch();
	let history = useNavigate();

	// initialize states
	const [latestBlocks, setLatestBlocks] = useState([]);

	// Get data from state
	const { data, error, loading } = useSelector((state) => state.latestBlocks);
	const getLatestBlocksDetail = useCallback(() => {
		dispatch(getLatestBlocks());
	}, [dispatch]);

	useEffect(() => {
		getLatestBlocksDetail();
	}, [getLatestBlocksDetail]);

	useEffect(
		(e) => {
			setLatestBlocks(data);
		},
		[data]
	);

	const testRowClick = (e) => {
		console.log(e);
		history(`/blocks/${e.original.hash}`);
	};

	const columns = useMemo(
		() => [
			{
				Header: 'Height',
				accessor: 'height',
			},
			{
				Header: 'Time',
				accessor: 'time',
			},

			{
				Header: 'Block Index',
				accessor: 'block_index',
			},
		],
		[]
	);

	return (
		<div className="blockchain-container">
			<Styles>
				{!error && !loading && data.length && (
					<Table columns={columns} data={data} testRowClick={testRowClick} />
				)}
				{error && !loading && (
					<div className="blockchain__error">
						Oops!! Something went wrong. Please try after sometime.
					</div>
				)}
				{loading && !data.length && <div className="blockchain_loader"></div>}
			</Styles>
		</div>
	);
};

export default LatestBlocks;
