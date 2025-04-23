import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logEvent } from '../utils/logger';
import logo from '../assets/Rectangle 12.png';
import Banner from '../assets/Rectangle 1.png';
import Rating from '@mui/material/Rating';

const FeedbackForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        feedback: '',
        visitFrequency: '',
        recommend: '',
        suggestions: '',
        followup: false,
    });

    const [ratings, setRatings] = useState({
        food: 0,
        service: 0,
        experience: 0,
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let errs = {};
        if (!form.name) errs.name = 'Name is required.';
        if (!form.email) errs.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email.';
        if (!form.feedback) errs.feedback = 'Feedback is required.';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            const finalData = { ...form, ratings };
            onSubmit(finalData);
            logEvent('Feedback Submitted', finalData);
            setForm({
                name: '',
                email: '',
                feedback: '',
                visitFrequency: '',
                recommend: '',
                suggestions: '',
                followup: false,
            });
            setRatings({ food: 0, service: 0, experience: 0 });
            navigate('/dashboard');
        } else {
            logEvent('Validation Error', errs);
        }
    };

    const handleRatingChange = (category, value) => {
        setRatings((prev) => ({ ...prev, [category]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg w-full max-w-sm p-4 space-y-4">
                <img src={logo} alt="Logo" className="mx-auto w-[200px] h-[93px]" />
                <img src={Banner} alt="Banner" className="rounded w-[393px] h-[160px]" />

                <div className="text-center">
                    <h1 className="text-lg font-semibold">HELLO, THANKS FOR VISITING</h1>
                    <p className="text-sm text-gray-600">
                        Please help us improve our service by filling out this feedback form.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 border border-gray-300 p-2 rounded"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 border border-gray-300 p-2 rounded"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Feedback */}
                    <div>
                        <label className="block text-sm font-medium">Feedback</label>
                        <input
                            type="text"
                            className="w-full mt-1 border border-gray-300 p-2 rounded"
                            value={form.feedback}
                            onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                        />
                        {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
                    </div>

                    {/* Visit Frequency */}
                    <div>
                        <label className="block text-sm font-medium">How often do you visit here?</label>
                        <select
                            className="w-full mt-1 border border-gray-300 p-2 rounded"
                            value={form.visitFrequency}
                            onChange={(e) => setForm({ ...form, visitFrequency: e.target.value })}
                        >
                            <option value="">Select</option>
                            <option>Regularly</option>
                            <option>Occasionally</option>
                            <option>First Time</option>
                        </select>
                    </div>

                    {/* Star Ratings */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Quality of the Food</label>
                        <Rating
                            name="food-quality"
                            value={ratings.food}
                            onChange={(e, newValue) => handleRatingChange('food', newValue)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Service Quality</label>
                        <Rating
                            name="service-quality"
                            value={ratings.service}
                            onChange={(e, newValue) => handleRatingChange('service', newValue)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Overall Experience</label>
                        <Rating
                            name="overall-experience"
                            value={ratings.experience}
                            onChange={(e, newValue) => handleRatingChange('experience', newValue)}
                        />
                    </div>

                    {/* Recommend Radio */}
                    <div>
                        <label className="block text-sm font-medium">Would you recommend us?</label>
                        <div className="flex space-x-4 mt-1">
                            <label>
                                <input
                                    type="radio"
                                    name="recommend"
                                    value="yes"
                                    checked={form.recommend === 'yes'}
                                    onChange={(e) => setForm({ ...form, recommend: e.target.value })}
                                />{' '}
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="recommend"
                                    value="no"
                                    checked={form.recommend === 'no'}
                                    onChange={(e) => setForm({ ...form, recommend: e.target.value })}
                                />{' '}
                                No
                            </label>
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div>
                        <label className="block text-sm font-medium">Your suggestions to improve</label>
                        <textarea
                            className="w-full mt-1 border border-gray-300 p-2 rounded"
                            rows="3"
                            value={form.suggestions}
                            onChange={(e) => setForm({ ...form, suggestions: e.target.value })}
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="followup"
                            className="mr-2"
                            checked={form.followup}
                            onChange={(e) => setForm({ ...form, followup: e.target.checked })}
                        />
                        <label htmlFor="followup" className="text-sm">
                            Receive personal follow-up to your feedback
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[] text-white py-2 rounded font-semibold hover:bg-red-600"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
