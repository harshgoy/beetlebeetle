import { useEffect, useState } from "react";
import "./Calculator.scss";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,

} from '@chakra-ui/react';
import {
    Accordion,
    Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const Calculator = () => {


    const [teamMember, setTeamMember] = useState(10);
    const [networkSize, setNetworkSize] = useState(2000);
    const [noOfSignals, setNoOfSignals] = useState(0.5);
    const [legitimateSignal, setLegitimateSignal] = useState(10);
    const [uniqueSignal, setUniqueSignal] = useState(20);
    const [result, setResult]= useState(200);

    useEffect(()=>{
        setResult(Math.trunc(teamMember*networkSize*noOfSignals*(legitimateSignal/100)*(uniqueSignal/100)));

    },[teamMember,networkSize,noOfSignals,legitimateSignal,uniqueSignal]);


    return (
        <div className='calculator--container'>
            <div className="calculator--left--container">


                <div className="information--container">
                    <p>Find Signals That Close Deals</p>
                    <Accordion style={{ display: "flex", gap: "30px", flexDirection: "column" }} allowMultiple width={"80%"}>
                        <AccordionItem background={"#F1EAFA"} borderRadius={"10px"}>
                            <h2>
                                <AccordionButton >
                                    <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} margin={"10px"}>
                                        Number of Team Members:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} margin={"10px"}>
                                How many people are in your firm’s deal team?
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem background={"#F1EAFA"} borderRadius={"10px"}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} margin={"10px"}>
                                        Size of Network:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} margin={"10px"}>
                                How many contacts are in your network?
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem background={"#F1EAFA"} borderRadius={"10px"}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} margin={"10px"}>
                                        Number of Signals Per Contact:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} margin={"10px"}>
                                How many signals (job changes, investments, mentions). Average: 1 signal per 2 contacts.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem background={"#F1EAFA"} borderRadius={"10px"}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} margin={"10px"}>
                                        Percent of Legitimate Signals:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} margin={"10px"}>
                                Signals that can lead you to reach out to a certain company. Average: 10%
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem background={"#F1EAFA"} borderRadius={"10px"}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} margin={"10px"}>
                                        Percent of Hard to Discover Signals:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} margin={"10px"}>
                                Signals that can only be discovered with relationship intelligence technology. Average: 10 to 20%
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
            <div className="calculator--right--container">
                <div className="calculator--details--container">
                    <div className="calc--input--fields--group">
                        <p style={{ fontSize: "18px", fontWeight: 700 }}>Number of Team Members</p>
                        <input onChange={(event)=>{setTeamMember((prev)=>event.target.value)}} style={{ color: "#120920" }} type="number" className="no--of--member--input-field" value={teamMember} />
                    </div>
                    <div className="calc--input--fields--group">
                        <p style={{ fontSize: "18px", fontWeight: 700 }}>Size of Network</p>
                        <input onChange={(event)=>{setNetworkSize((prev)=>event.target.value) }}style={{ color: "#120920" }} type="number" className="size--of--network--input-field" value={networkSize} />
                    </div>
                    <div className="calc--input--fields--group">
                        <p style={{ fontSize: "18px", fontWeight: 700 }}>Number of Signals Per Contact / Year</p>
                        <input  onChange={(event)=>{setNoOfSignals((prev)=>event.target.value) }} style={{ color: "#120920" }} type="number" className="no--of--signal--input-field" value={noOfSignals} />
                    </div>
                    <div className="calc--input--fields--group">
                        <p style={{ fontSize: "18px", fontWeight: 700 }}>% Legitimate Signals</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px", justifyContent: "space-evenly" }} className="slider--container">
                            <label htmlFor="">0</label>
                            <Slider width={"80%"} aria-label='slider-ex-4' defaultValue={legitimateSignal} min={0} max={100} step={1} onChange={(val) => setLegitimateSignal(val)}>
                                <SliderTrack height={"6px"} bg='#8753D433'>
                                    <SliderFilledTrack bg='#8753D4' />
                                </SliderTrack>
                                <SliderThumb color={"#8753D4"} border={"4px solid #8753D4"} boxSize={10}>
                                    {legitimateSignal}
                                </SliderThumb>
                            </Slider>
                            <label htmlFor="">100</label>

                        </div>

                        {/* <input type="number" className="legitimate--signals--input-field" placeholder="Enter the % Legitimate Signals"/> */}
                    </div>
                    <div className="calc--input--fields--group">
                        <p style={{ fontSize: "18px", fontWeight: 700 }}>% Unique/Hard To Discover Signals</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px", justifyContent: "space-evenly" }} className="slider--container">
                            <label htmlFor="">0</label>
                            <Slider width={"80%"} aria-label='slider-ex-4' defaultValue={uniqueSignal} min={0} max={100} step={1} onChange={(val) => setUniqueSignal(val)}>
                                <SliderTrack height={"6px"} bg='#8753D433'>
                                    <SliderFilledTrack bg='#8753D4' />
                                </SliderTrack>
                                <SliderThumb color={"#8753D4"} border={"4px solid #8753D4"} boxSize={10}>
                                    {uniqueSignal}
                                </SliderThumb>
                            </Slider>
                            <label htmlFor="">100</label>

                        </div>
                    </div>
                    <div className="calc--input--fields--group">
                        <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "1.2px" }}>NUMBER OF NEW SIGNALS</p>
                        <input value={result} style={{ background: "#1209200A" }} type="number" readonly="readonly" className="new--signal--input-field"  />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Calculator
