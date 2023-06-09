

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Website Name */}
                        <div className="col-span-1">
                            <h2 className="text-3xl font-bold text-white">Fluency <span className="text-blue-500">Xpress</span></h2>
                            <p className="text-gray-400 mt-4">
                                Providing unique language learning experiences since 1993.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="col-span-1">
                            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="text-gray-400 hover:text-white">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="text-gray-400 hover:text-white">About</a>
                                </li>
                                <li>
                                    <a href="/courses" className="text-gray-400 hover:text-white">Courses</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-span-1">
                            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                            <p className="text-gray-400">Email: info@fluencyxpress.com</p>
                            <p className="text-gray-400">Phone: +1 546-765-2345</p>
                            <p className="text-gray-400">Address: 123 Main Street, City, Country</p>
                        </div>

                        {/* About */}
                        <div className="col-span-1">
                            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
                            <p className="text-gray-400">
                                At Fluency Xpress, we are passionate about helping individuals from all walks of life
                                achieve fluency in foreign languages.
                            </p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            @2023 Fluency Xpress. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;