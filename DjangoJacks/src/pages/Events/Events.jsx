import React, { useState } from 'react';
import './EventsPage.css'; // Link to the CSS file for styling

// --- SVG Icon Components ---
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const ChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;

// --- Dummy Data (RESTORED to the full list) ---
const dummyEvents = [
    {
        id: 1,
        date: '2025-09-11T11:45:00-07:00', // PDT
        title: 'LA South Bay Techers Monthly Lunch (September)',
        locationName: 'Brewport Tap House & Kitchen',
        locationAddress: '204 Main Street, El Segundo, CA, United States',
        description: 'Meet fellow alumni for lunch, connect with others in your field, talk science, and share Caltech memories.',
        price: 'Free',
        imageSrc: 'https://placehold.co/300x150/6e40c9/ffffff/webp?text=Caltech+Together',
        isFeatured: false,
    },
    {
        id: 2,
        date: '2025-09-18T18:00:00-07:00', // PDT
        title: 'Caltech Together: Silicon Valley',
        locationName: 'Intuitive Surgical',
        locationAddress: 'Café in B108 1020 Kifer Road, Sunnyvale, CA, United States',
        description: 'Join fellow alumni in person for a presentation by Shuki Bruck who will discuss, "Information: From Life to Artificial Intelligence".',
        price: '$30',
        imageSrc: 'https://placehold.co/300x150/6e40c9/ffffff/webp?text=Caltech+Together',
        isFeatured: false,
    },
    {
        id: 3,
        date: '2025-09-20T10:00:00-04:00', // UTC-4
        title: 'Caltech Together: Lancaster, PA',
        locationName: 'Cherry Crest Farm',
        locationAddress: '150 Cherry Hill Road, Ronks, PA, United States',
        description: 'Connect with fellow alumni for a morning of fall activities at Cherry Crest Farm in Ronks, Pennsylvania.',
        price: 'Free',
        imageSrc: 'https://placehold.co/300x150/6e40c9/ffffff/webp?text=Caltech+Together',
        isFeatured: false,
    },
    {
        id: 4,
        date: '2025-09-25T18:00:00-07:00', // PDT
        title: 'Annual Meeting of Members',
        locationName: 'Online',
        locationAddress: '',
        description: 'Register for the Annual Meeting of Members to hear CAA updates and learn more about upcoming plans.',
        price: 'Free',
        imageSrc: 'https://placehold.co/300x150/005f73/ffffff/webp?text=Annual+Meeting',
        isFeatured: true,
    },
    {
        id: 5,
        date: '2025-10-17T09:00:00-07:00', // PDT
        endDate: '2025-10-19T13:00:00-07:00',
        title: 'Alumni Weekend',
        locationName: 'California Institute of Technology',
        locationAddress: '1200 East California Boulevard, Pasadena, CA, United States',
        description: 'Join the Caltech community for the annual Alumni Weekend from Friday, October 17 to Sunday, October 19, 2025!',
        price: '$25 - $200',
        imageSrc: 'https://placehold.co/300x150/0a9396/ffffff/webp?text=Alumni+Weekend',
        isFeatured: true,
    },
    {
        id: 6,
        date: '2026-02-19T00:00:00Z',
        endDate: '2026-02-27T00:00:00Z',
        title: 'Finland ~ Arctic Magnificence',
        locationName: 'Finland',
        locationAddress: '',
        description: 'Experience the magic of the Arctic with fellow alumni on this unforgettable trip to Finland.',
        price: 'Varies',
        imageSrc: 'https://placehold.co/300x150/007f5f/ffffff/webp?text=Finland+Trip',
        isFeatured: false,
    },
];


export default function EventsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('List'); // List, Month, Day
    const [filterType, setFilterType] = useState('Upcoming'); // Upcoming, Past

    const filteredEvents = dummyEvents.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.description.toLowerCase().includes(searchTerm.toLowerCase());

        const today = new Date();
        const eventDate = new Date(event.date);
        const matchesFilter = filterType === 'Upcoming' ? eventDate >= today : eventDate < today;

        return matchesSearch && matchesFilter;
    });

    const eventsByMonth = filteredEvents.reduce((acc, event) => {
        const eventDate = new Date(event.date);
        const monthYear = eventDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        if (!acc[monthYear]) {
            acc[monthYear] = [];
        }
        acc[monthYear].push(event);
        return acc;
    }, {});

    const getEventDay = (dateStr) => new Date(dateStr).getDate();
    const getEventDayOfWeek = (dateStr) => new Date(dateStr).toLocaleString('default', { weekday: 'short' }).toUpperCase();
    
    const renderEventsView = () => {
        switch (viewMode) {
            case 'Month':
                return <div className="placeholder-view">Month View Coming Soon</div>;
            case 'Day':
                return <div className="placeholder-view">Day View Coming Soon</div>;
            case 'List':
            default:
                return (
                    <div className="events-list">
                        {Object.keys(eventsByMonth).length > 0 ? (
                            Object.keys(eventsByMonth).map(month => (
                                <div key={month} className="month-group">
                                    <h2 className="month-header">{month}</h2>
                                    {eventsByMonth[month].map(event => (
                                        <div key={event.id} className={`event-item ${event.isFeatured ? 'featured-event' : ''}`}>
                                            <div className="event-date">
                                                <span className="day-of-week">{getEventDayOfWeek(event.date)}</span>
                                                <span className="day-number">{getEventDay(event.date)}</span>
                                            </div>
                                            <div className="event-details">
                                                <p className="event-timestamp">
                                                    {new Date(event.date).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
                                                </p>
                                                <h3>{event.title}</h3>
                                                <p className="event-location">
                                                    <strong>{event.locationName}</strong> {event.locationAddress && ` - ${event.locationAddress}`}
                                                </p>
                                                <p className="event-description">{event.description}</p>
                                                <p className="event-price">{event.price}</p>
                                            </div>
                                            <div className="event-image">
                                                <img src={event.imageSrc} alt={`${event.title} banner`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <p className="no-events-message">No events found.</p>
                        )}
                    </div>
                );
        }
    };

    return (
        <div className="events-page-container">
            <header className="events-banner">
                <div className="events-banner-overlay">
                    <h1>Events</h1>
                </div>
            </header>

            <main className="events-content">
                <div className="events-controls">
                    <div className="search-bar">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search for events"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="view-options">
                        <button className="find-events-btn">Find Events</button>
                        <button className={viewMode === 'List' ? 'active' : ''} onClick={() => setViewMode('List')}>List</button>
                        <button className={viewMode === 'Month' ? 'active' : ''} onClick={() => setViewMode('Month')}>Month</button>
                        <button className={viewMode === 'Day' ? 'active' : ''} onClick={() => setViewMode('Day')}>Day</button>
                    </div>
                </div>

                <div className="date-navigation">
                    <div className="nav-arrows">
                        <button><ChevronLeft /></button>
                        <button><ChevronRight /></button>
                    </div>
                    <button className="today-btn">Today</button>
                    <div className="filter-dropdown">
                        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Past">Past Events</option>
                        </select>
                    </div>
                </div>
                
                {renderEventsView()}
            </main>

            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h4>Job Board X</h4>
                        <p>A curated job board for the best jobs in the tech industry.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Post a Job</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>123 Tech Lane, Silicon Valley, CA</p>
                        <p>contact@jobboardx.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Job Board X. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}