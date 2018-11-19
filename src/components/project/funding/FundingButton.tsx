import * as React from 'react';
import { Button, ButtonTypes } from 'src/components/common/Buttons';
import { deviceWidth } from '../../../lib/commonData';
import styled from 'styled-components';
import { Web3Acc } from 'src/types/models/web3';
import { Spinner } from 'src/components/common/Spinner';

const ButtonWrapper = styled.div`

	a {
		display: flex;
		justify-content: center;
		flex-direction: row;
		width: 240px;	
		position: relative;
		font-size: 15px;
		margin-bottom: 0;

		:not(.disabled) {
			background: #007695;
			border: 1px solid #007695;

			:hover {

				background: #002d42;
				border: 1px solid ${props => props.theme.ixoBlue};
				
				i {
					animation: buttonHover 0.5s ease;
				}
			}
		}

		p {
			margin: 0;
		}
		
		i {
			right: 20px;
			transform: rotate(-90deg);
			position: absolute;
			top: 14px;
			font-size: 12px;
			font-weight: bold;
			opacity: 1;
		}

		@keyframes buttonHover {
			0% { right: 40px; opacity: 0;}
			100% { right: 20px; opacity: 1;}
		}

		@media (min-width: ${deviceWidth.desktopLarge}px) {
			width: 290px;	
		}
	}
`;

export interface ParentProps {
	projectWalletAddress: string;
	requiredIxo: number;
	account: Web3Acc;
	createProjectWallet: () => void;
	fundProject: () => void;
	web3error: string;
	creatingWallet: boolean;
}

export const FundingButton: React.SFC<ParentProps> = (props) => {

	if (props.creatingWallet === true) {
		return (
			<ButtonWrapper>
				<Button type={ButtonTypes.dark} disabled={true} ><p>Creating project...</p> <i className="icon-down" /></Button>
			</ButtonWrapper>
		);
	}
	if (props.web3error) {
		return null;
	}
	if (props.projectWalletAddress === null) {
		return <Spinner info="" transparentBg={true} scale={0.8} />;
	}
	if (props.projectWalletAddress === '0x0000000000000000000000000000000000000000') {
		return (
			<ButtonWrapper>
				<Button type={ButtonTypes.dark} onClick={props.createProjectWallet}><p>Create Project Wallet</p> <i className="icon-down" /></Button>
			</ButtonWrapper>
		);
	}
	if (props.account.balance >= props.requiredIxo) {
		return (
			<ButtonWrapper>
				<Button type={ButtonTypes.dark} onClick={props.fundProject}><p>ADD FUEL</p> <i className="icon-down" /></Button>
			</ButtonWrapper>
		);
	}
	return (
		<ButtonWrapper>
			<Button type={ButtonTypes.dark} disabled={true}><p>ADD FUEL</p> <i className="icon-down" /></Button>
		</ButtonWrapper>
	);
};