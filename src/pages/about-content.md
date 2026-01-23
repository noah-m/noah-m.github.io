# Noah Mould
**Integrated Engineering Student (Mechatronics)**  
Vancouver, BC · nmould@student.ubc.ca · 604-356-0004

---

## Technical Skills
- **Embedded:** C/C++, Python; Arduino / ESP32; Raspberry Pi; real-time sensing and control loops  
- **Electronics:** schematic and PCB design (Altium); power distribution; mixed-signal interfacing (ADC, isolation); galvanic isolation  
- **Protocols & Tools:** I2C, SPI, CAN; Git/GitHub; oscilloscope, multimeter, bench power supplies  

---

## Education
**University of British Columbia** — *Expected Apr 2027*  
Bachelor of Applied Science, Integrated Engineering (Mechatronics)  
Trek Excellence Scholarship — Top 5% of Faculty

---

## Work Experience
**TRIUMF — HAICU Student Research Assistant (Particle Physics)**  
*Sep 2025 – Dec 2025*

- Developed embedded slow-control software in the MIDAS DAQ framework: C++ frontend on Raspberry Pi controlling magnet power supplies via DAC, with a browser-based custom-page UI and JSON-RPC command interface.
- Designed a hardware-independent power-supply interface and implemented support for multiple supply models (AE Techron and SGX) to enable shared ramp execution, input validation, and error reporting.
- Wrote Python scripts to configure and monitor a CAEN high-voltage supply (Ethernet/USB), translating operator settings into device command syntax and surfacing alarms and fail-safes in the UI.
- Prototyped and built a copper-sheet air-drying machine to reduce manual handling during lead fabrication (reduced labour from three people to two), and supported testing and debugging of thermistor readouts and high-amperage cabling.

---

## Technical Projects
**Autonomous Wall Painting Robot — UBC Design Project**  
*Sep 2024 – Apr 2025*

- Led the build of an autonomous robot that paints a clean line above wall trim by integrating sensing, motion, and paint-delivery subsystems end-to-end.
- Implemented wall alignment using an 8×8 Time-of-Flight depth sensor (VL53L5CX) on a Raspberry Pi Pico; coordinated actuation through an Arduino Mega over I2C and resolved I2C timing and communication instability during system integration.
- Designed the mechanical and electrical system (linear actuator height control, limit switches, DC/stepper/servo actuation, omni-wheel drive) and validated performance across surface variation with structured tests.

**Smart Heated Umbrella — UBC Design Project**  
*Dec 2023 – Apr 2024*

- Designed a rechargeable heated umbrella handle (PETG enclosure) using an ESP32-S3, 1S2P 18650 battery pack, heating films, display, and user controls to deliver three heat levels with safety limits.
- Built and tested the low-voltage power and switching design, iterating component choices to meet 3.3 V control constraints and temperature targets within cost and size limits.

---

## Design Team Experience
**UBC Thunderbots — Electrical Team (RoboCup SSL)**  
*Sep 2025 – Present*

- Developed a high-voltage monitoring subsystem for a 240 V capacitor bank on the power board: isolation amplifier and ADC feeding an ESP32 over SPI to provide galvanically isolated telemetry to software.
- Validated ADC measurement approach on target hardware (ESP32) and refined the analog front-end to meet input-range constraints while maintaining isolation and accuracy requirements.
- Supported power-board rerouting to meet mechanical envelope constraints while preserving power distribution, DC-DC conversion, and safety-critical high-voltage features.
