import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import PdfViewerModal from "../../components/modal";

const RgownersPage = () => {
    const [pdfData, setPdfData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentPdf, setCurrentPdf] = useState("");
    const [currentPdfName, setCurrentPdfName] = useState("");

    useEffect(() => {
        fetch("/api/rgowners")
            .then((res) => res.json())
            .then((data) => setPdfData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const font100 = {
        fontWeight: "100",
    };

    const handleOpenModal = (item) => {
        setCurrentPdf(item.pdfUrl);
        setCurrentPdfName(item.name);
        setShowModal(true);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <Header />
                </div>
                <div className="container">
                    <h1 style={font100}>Gitanjalian Owners Communication Board</h1>
                    <p>
                        Welcome to the Gitanjalian Owners Communication Board, an exclusive
                        platform created by the <strong>Riya Gitanjali Apartment Association</strong>. This
                        space is dedicated to all owners of Gitanjali Flats, ensuring a
                        smooth and efficient way to share important announcements, notices,
                        and updates. Through this board, the association circulates various
                        messages from time to time, keeping all residents informed about
                        essential matters related to the community. You can view/ download
                        shared content as needed.
                    </p>
                    <p>
                        If you face any issues or have concerns that require attention, we
                        encourage you to <strong>raise your voice</strong> by reaching out
                        to the association. You can contact us via email at{" "}
                        <strong>rgaoao@gmail.com</strong>, and we will address ASAP. We aim
                        to foster a transparent, cooperative, and well-connected community
                        where every resident feels heard and valued. Stay engaged, stay
                        informed, and let's build a stronger Gitanjalian together! 🚀
                    </p>
                    <table className="table table-striped table-hover table-bordered table-condensed">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">View/download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pdfData.length > 0 ? (
                                pdfData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button
                                                className="btn btn-success btn-sm"
                                                onClick={() => handleOpenModal(item)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="icon" fill="#FFFFFF" transform="translate(85.333333, 64.000000)">
                                                            <path d="M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L4.26325641e-14,362.666667 L4.26325641e-14,64 L128,63.999444 Z M362.666667,1.42108547e-14 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,1.42108547e-14 L362.666667,1.42108547e-14 Z" id="Combined-Shape">

                                                            </path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4}>
                                        Currently no data available. Please visit next time.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <PdfViewerModal
                    pdfName={currentPdfName}
                    pdfUrl={currentPdf}
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default RgownersPage;
