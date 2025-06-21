import React from 'react';
import './propertydetail.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/DataHandle/Redux/store';
import { Property } from './property'
import CustomCard from '../../Components/Fields/CustomCard/CustomCard';
import { ImageUtil } from '../../Assert/ImageUtil';

const PropertyDetailPage: React.FC = () => {
    const selectedProperty = useSelector(
        (state: RootState) => state.property.selectedProperty
    ) as Property | null;

    if (!selectedProperty) {
        return <div style={{ textAlign: 'center' }}>No property data found</div>;
    }
    const imageUtil = new ImageUtil()
    // Safe fallback from algoliaData if needed
    const attr = selectedProperty?.attributes;
    const algolia = attr.algoliaData || {};

    const thumbnail = attr.thumbnail || algolia.thumbnail || '';
    const images = attr.images || [];
    const price = attr.price || algolia.price || 0;
    const titleadd = attr.slug || algolia.slug || 'Untitled';
    const address1 = attr.address.address1 || algolia.title || 'Untitled';
    const bedroom = attr.bedroom ?? algolia.bedroom ?? '-';
    const bathroom = attr.bathroom ?? algolia.bathroom ?? '-';
    const reception = attr.reception ?? algolia.reception ?? '-';
    const brochure = attr.brochure || 'Download Brochure';
    const floorplan = attr.brochure || 'View Floorplan'
    const description = attr.description || algolia.description || 'No description available';

    return (
        <CustomCard>
            <div className="property-detail-container">
                <div className="main-section">
                    <div className="image-gallery">
                        <img src={thumbnail} alt="Main Property" className="main-image" />
                        <div className="additional-images">
                            {images.slice(1, 3).map((img: any, index: number) => (
                                <img key={index} src={img.srcUrl} alt={`Extra ${index + 1}`} />
                            ))}
                        </div>
                    </div>

                    <div className="details-panel">
                        <div className='sharepanel'>
                            <img src={imageUtil.ShareIcon} alt="shareicon" className="shareicon" />
                            <img src={imageUtil.LikeIcon} alt="likeicon" className="likeicon" />
                        </div>
                        <div className="price-title">£{price}</div>
                        <div className="subinfo">
                            {bedroom} bed • {bathroom} bath • {reception} reception
                        </div>
                        <div className="property-title">{titleadd}</div>
                        <div className='contactcontainer'>
                            <img src={imageUtil.HomeIcon} alt="homeicon" className="homeicon" />
                            <span className="contact-agent">Please contact us</span>
                        </div>
                        <button className='contact-agentbtn'>CONTACT AGENT</button>
                        <div className='feature'>
                            <h3>FACTS & FEATURES</h3>
                        </div>
                        <div className="facts">
                            <div className="fact">
                                <span className="label">Neighbourhood:</span>
                                <span className="value">{address1}</span>
                            </div>
                            <div className="fact">
                                <span className="label">Price per sqm:</span>
                                <span className="value">{price}</span>
                            </div>
                            <div className="fact">
                                <span className="label">Brochure:</span>
                                <span className="value">{brochure}</span>
                            </div>
                            <div className="fact">
                                <span className="label">Floor plan:</span>
                                <span className="value">{floorplan}</span>
                            </div>

                        </div>

                        <div className="description">{description}</div>

                        <div className="agent-info">
                            <img src="https://via.placeholder.com/50" alt="Agent" />
                            <div className="info">
                                <div className="name">Reka Demeter</div>
                                <div className="contact">+377 93 25 86 66 | Email</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CustomCard>

    );
};

export default PropertyDetailPage;
