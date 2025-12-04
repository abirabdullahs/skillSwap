import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import SkillCard from '../../components/SkillCard';
import { Search, SortAsc, SortDesc, FilterIcon } from 'lucide-react';

const AllItems = () => {
    const skills = useLoaderData();
    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(skills.map(skill => skill.category))];

    // Filter and sort skills
    useEffect(() => {
        let result = [...skills];

        // Filter by category
        if (selectedCategory !== 'All') {
            result = result.filter(skill => skill.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm) {
            result = result.filter(skill =>
                skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                skill.providerName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort by price
        result.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setFilteredSkills(result);
    }, [searchTerm, sortOrder, selectedCategory, skills]);

    return (
        <div className="py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    All Skills
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Browse and discover amazing skills shared by our community
                </p>
            </div>

            {/* Filter and Sort Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {/* Search Bar */}
                    <div className="relative md:col-span-2">
                        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search skills, providers..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                            className={`flex-1 px-4 py-2 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                                sortOrder === 'asc'
                                    ? 'bg-purple-600 text-white border-purple-600'
                                    : 'bg-purple-100 text-purple-600 border-purple-300'
                            }`}
                        >
                            {sortOrder === 'asc' ? (
                                <>
                                    <SortAsc size={18} />
                                    Low to High
                                </>
                            ) : (
                                <>
                                    <SortDesc size={18} />
                                    High to Low
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 flex-wrap">
                    <FilterIcon size={18} className="text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Category:</span>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-gray-600 dark:text-gray-300">
                Showing <span className="font-semibold">{filteredSkills.length}</span> skill{filteredSkills.length !== 1 ? 's' : ''}
            </div>

            {/* Skills Grid */}
            {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredSkills.map((skill) => (
                        <div key={skill.skillId} className="h-full">
                            <SkillCard skill={skill} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                        No skills found
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Try adjusting your filters or search terms
                    </p>
                </div>
            )}
        </div>
    );
};

export default AllItems;
