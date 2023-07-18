import React, { useEffect, useState } from 'react';
import styles from "./sopPage.module.css";
import ItemCard from "../ItemCardSOP";
import ModalWindow from "../modal";
import ImageButton from "./SvgButton";

const SopPage = () => {
    const [currentYear, setCurrentYear] = useState(2023);
    const [currentMonth, setCurrentMonth] = useState("");
    const [show, setShow] = useState(false);
    useEffect(() => {
        var today = new Date();
        let year = today.getFullYear();
        const monthNameLong = today.toLocaleString("en-US", { month: "long" });
        setCurrentYear(year);
        setCurrentMonth(monthNameLong);
    }, []);

    const handleClick = () => {
        // Arrow button logic
    };
    return (
        <div className={styles.layout}>
            <ImageButton onClick={handleClick} />
            <div><h1 className={styles.title}>SOP Management</h1></div>
            <div className={styles.sections}>
                <div className={styles.overallSection}>
                    <h1 className={styles.subTitleOverall}>Overall Status</h1>
                    <div className={styles.summaryDashboardOverall}>
                        <div className={styles.monthYearCard}>
                            <h1 className={styles.currentMonth}>{currentMonth}</h1>
                            <h1 className={styles.currentYear}>{currentYear}</h1>
                        </div>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.sopAcceptedCard}>
                            <h1 className={styles.sopNumber}>6</h1>
                            <h3 className={styles.acceptedText}>accepted</h3>
                        </div>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.sopLeftCard}>
                            <h1 className={styles.sopLeftNumber}>2</h1>
                            <h3 className={styles.leftText}>left</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.SOPSection}>
                    <h1 className={styles.subTitleSOP}>My SOPs</h1>
                    <div className={styles.summaryDashboardSOP}>
                        <div className={styles.listContainer}>
                            <div className={styles.columnListManager}>
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />{" "}
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />{" "}
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />{" "}
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ItemCard onClick={() => setShow(true)} title={"SOP Title"} />
                                <ModalWindow onClose={() => setShow(false)} show={show}>
                                    <div className={styles.modal}>
                                        <h1 className={styles.h1Modal}>{"SOP Title"}</h1>
                                        <div>
                                            <h2>Description</h2>
                                            <p className={styles.desc}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto delectus exercitationem modi beatae ab, non nulla. Aut, autem voluptatum. Sed omnis assumenda eos aliquam dolore ipsum, ea nemo quia odio?
                                                Suscipit, nemo impedit error voluptas magni earum aut corrupti veniam? Sunt necessitatibus, numquam cum esse quibusdam repudiandae hic illum dicta blanditiis, amet ipsum eveniet non libero laborum et reprehenderit incidunt?
                                                Minus, reiciendis. Eum ea repellendus nam asperiores explicabo dignissimos accusantium esse. Labore tempora iure perspiciatis nemo minus libero at, saepe consectetur mollitia praesentium similique, cum facere vero eligendi eveniet maxime.
                                            </p>
                                        </div>
                                        <div className={styles.itemBox}>
                                            <h2>Items</h2>
                                            <ul className={styles.customList}>
                                                <li>Item Text</li>
                                                <li>Item Text</li>
                                                <li>Item Text</li>
                                                <li>Item Text</li>
                                                <li>Item Text</li>
                                                <li>Item Text</li>
                                                <li>Item Text</li>
                                            </ul>
                                        </div>
                                        <div className={styles.linkBox}>
                                            <h2>Links</h2>
                                            <ul>
                                                <li>
                                                    <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E">Link</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E">Link</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ModalWindow>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SopPage;