import './Styles/Styles.css';

interface footerProps{
    logoPath: string;
    companyDescription: string;
    companySocialLinks: string[];
    productsList: aTagProps[];
    companyList: aTagProps[];
    supportList: aTagProps[];
    downloadList: aTagProps[];
}
interface aTagProps{
    link: string;
    label: string;
}

export default function Footer(footProps: footerProps){
    return (
        <div className="footer-wrapper">
            <div className="footer-details">
                <div className="company-details">
                    <div className="logo">
                        <img src={footProps.logoPath} alt="Logo" />
                    </div>
                    <div className="company-description">
                        {footProps.companyDescription}
                    </div>
                    <div className="social-media-links">
                        Social Media Links
                    </div>
                </div>
                <div className="products-list">
                    <li>
                        <strong>
                            Products
                        </strong>
                    </li>
                    {
                        footProps.productsList.map((product, index) => {
                            return <li key={index}>
                                        <a href={product.link}>{product.label}</a>
                                    </li>
                        })
                    }
                </div>
                <div className="company-list">
                    <li>
                        <strong>
                            Company
                        </strong>
                    </li>
                    {
                        footProps.companyList.map((company, index) => {
                            return <li key={index}>
                                        <a href={company.link}>{company.label}</a>
                                    </li>
                            })
                    }
                </div>
                <div className="support-list">
                    <li>
                        <strong>
                            Support
                        </strong>
                    </li>
                    {
                        footProps.supportList.map((support, index) => {
                            return <li key={index}>
                                        <a href={support.link}>{support.label}</a>
                                    </li>
                        })
                    }
                </div>
                <div className="download-list">
                    <li>
                        <strong>
                            Download
                        </strong>
                    </li>
                    {
                        footProps.downloadList.map((download, index) => {
                            return <li key={index}>
                                        <a href={download.link}>{download.label}</a>
                                    </li>
                        })
                    }
                </div>
            </div>
            <hr/>
            <div className="copy-right-details">
                CopyRight Text
            </div>
        </div>
    )
}
