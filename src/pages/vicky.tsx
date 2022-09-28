/* eslint-disable no-unused-vars */
import * as React from "react";
import { Col, Layout, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import { Content } from "../components/atm.content/content";
import {
	BubbleWrapper,
	ChatWrapper,
	FooterWrapper,
	QuickReplyWrapper,
	TextWrapper
} from "../modules/vicky/vicky.style";
import useWindowDimensions from "../utils/hooks/use-window-dimension.hook";
import { VickyNeutralSvg } from "../assets/svg/vicky-neutral-svg";
import { VSeparator } from "../components/atm.separator/v-separator";

const VickyPage: React.FC = () => {
	const isBrowser = typeof window !== "undefined";

	if (!isBrowser) return <></>;

	const { width, height } = useWindowDimensions();
	const svgSizePercentage = width >= 950 ? 0.3 : 0.4;
	const bubbleBorder = width >= 950 ? 0.1 : 0.05;

	return (
		<Layout>
			<Content>
				<Grid>
					<Row>
						<Col xs={4} lg={2} md={2} xl={2} xxl={2}>
							<TextWrapper>
								<ChatWrapper height={Math.floor(0.8 * height)}>
									<Col xs={4} lg={4} md={4}>
										<BubbleWrapper borderRadius={Math.floor(bubbleBorder*height)} minHeight={Math.floor(0.03*height)} maxWidth={Math.floor(0.4 * width)}>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et odio sed orci ullamcorper porta nec et urna. Integer a est porta, molestie turpis vitae, tristique nunc. Etiam porta, ante vel efficitur vehicula. 
										</BubbleWrapper>
										<VSeparator />
										<VickyNeutralSvg height={svgSizePercentage * width} width={svgSizePercentage * width} />
										<FooterWrapper>
											<QuickReplyWrapper>Ok</QuickReplyWrapper>
											<QuickReplyWrapper>Ok</QuickReplyWrapper>
										</FooterWrapper>
									</Col>
								</ChatWrapper>
							</TextWrapper>
						</Col>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};

export default VickyPage;
