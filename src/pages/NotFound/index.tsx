import { Link } from 'react-router-dom';

import './index.scss';

const NotFount = () => {
    return (
        <div className="not-found">
            <header className="top-header" />

            {/* <!--dust particel--> */}
            <div>
                <div className="starsec" />
                <div className="starthird" />
                <div className="starfourth" />
                <div className="starfifth" />
            </div>
            {/* <!--Dust particle end---> */}

            <div className="lamp__wrap">
                <div className="lamp">
                    <div className="cable"></div>
                    <div className="cover"></div>
                    <div className="in-cover">
                        <div className="bulb"></div>
                    </div>
                    <div className="light" />
                </div>
            </div>
            {/* <!-- END Lamp --> */}
            <section className="error">
                {/* <!-- Content --> */}
                <div className="error__content">
                    <div className="error__message message">
                        <h1 className="message__title">Page Not Found</h1>
                        <p className="message__text">
                            Sorry, the page you are looking for does not exist.
                        </p>
                    </div>
                    <div className="error__nav e-nav">
                        <Link to="/" className="e-nav__link" />
                    </div>
                </div>
                {/* <!-- END Content --> */}
            </section>
        </div>
    );
};

export default NotFount;
