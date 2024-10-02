import React, {FC, memo} from 'react';

const MSCourseWork: FC = memo(() => (
    <div className="text-black text-justify" style={{fontSize: '13px'}}>
        <div>
            <h3 className="font-bold">Course Work</h3>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
                <li>Digital System Design: Understanding and designing digital systems at both circuit and system levels using HDL languages like Verilog and VHDL.</li>
                <li>FPGA/ASIC Design: Proficiency in hardware description languages and tools for designing and implementing complex digital systems on FPGAs and ASICs.</li>
                <li>Signal Processing: Implementing and optimizing digital signal processing algorithms in software and hardware.</li>
                <li>Embedded System Design: Designing real-time embedded systems, interfacing microcontrollers with peripherals, and developing robust firmware.</li>
                <li>Computer Architecture and Performance Optimization: In-depth understanding of modern processor architectures and techniques for performance improvement.</li>
                <li>VLSI Design and Fabrication: Designing and optimizing integrated circuits for power, performance, and area efficiency, including knowledge of the fabrication process.</li>
                <li>Simulation and Verification: Mastering simulation tools and methodologies for verifying the correctness of digital designs, including functional verification and formal verification.</li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold">Software and Tools</h3>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
                <li>MATLAB/Simulink: For signal processing and system-level design.</li>
                <li>Xilinx Vivado/Altera Quartus: For FPGA design, simulation, and synthesis.</li>
                <li>Cadence Virtuoso/Synopsys: For VLSI design and verification.</li>
                <li>ModelSim/ISE: For logic simulation and verification.</li>
                <li>Embedded C/Assembly: For embedded system programming.</li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold">Course Projects</h3>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
                <li>Processor Design: Designing PDP8 processor using VHDL and fabricating the chip.</li>
                <li>Automotive Electronics: Building embedded systems for automotive control units.</li>
                <li>Consumer Electronics: Developing FPGA and ASIC designs for high-performance consumer devices.</li>
                <li>Telecommunications: Applying digital design for signal processing in communication systems.</li>
            </ul>
        </div>
    </div>
));

const BECourseWork: FC = memo(() => (
    <div className="text-black text-justify" style={{fontSize: '13px'}}>
        <div>
        <h3 className="font-bold">Course Work</h3>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
            <li><a href="https://coursera.org/share/6181a21099f086744e48c4c29302ec7e" target="_blank" rel="noopener noreferrer">
                View my certificate
            </a></li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold">Course Projects</h3>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
                <li>Processor Design: Arithmetic operation implementation using 8085 assembly language.</li>
            </ul>
        </div>
    </div>
));

const CertificatePMP: FC = memo(() => (
    <div className="text-black text-justify" style={{fontSize: '13px'}}>
        <div>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
            <a href="https://coursera.org/share/c67c53edabf01955c903394a807af302" target="_blank" rel="noopener noreferrer">
                View my certificate
            </a>
            </ul>
        </div>
    </div>
));

const CertificateData: FC = memo(() => (
    <div className="text-black text-justify" style={{fontSize: '13px'}}>
        <div>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
            <a href="https://coursera.org/share/0a9b7bce1ff758916e197bb65d870722" target="_blank" rel="noopener noreferrer">
                View my certificate
            </a>
            </ul>
        </div>
    </div>
));

const CertificateCyber: FC = memo(() => (
    <div className="text-black text-justify" style={{fontSize: '13px'}}>
        <div>
        <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
            <a href="https://coursera.org/share/8963aeac5d742c94475067bbeaf9375a" target="_blank" rel="noopener noreferrer">
                View my certificate
            </a>
            </ul>
        </div>
    </div>
));

const CertificateAI: FC = memo(() => (
    <div className="text-black text-justify" style={{fontSize: '13px'}}>
        <div>
            <ul className="bullet-list-disc" style={{fontSize: '13px'}}>
            <a href="https://coursera.org/share/6181a21099f086744e48c4c29302ec7e" target="_blank" rel="noopener noreferrer">
                View my certificate
            </a>
            </ul>
        </div>
    </div>
));

export  {
   MSCourseWork,
   BECourseWork,
   CertificatePMP,
   CertificateData,
   CertificateCyber,
   CertificateAI,
};