-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2022 at 07:47 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gadgetbadget`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `pid` int(11) NOT NULL,
  `project_category` varchar(255) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `short_des` varchar(255) NOT NULL,
  `price` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `project_goal` varchar(255) NOT NULL,
  `long_des` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pid`, `project_category`, `project_name`, `short_des`, `price`, `date`, `project_goal`, `long_des`) VALUES
(11, 'Electrical grid', 'Smart grid(Matara)', 'Energy measures such as smart meters, smart appliances.', '$250 million', '28.05.2021', 'Reliable power', 'Smart grid still refers to the bi-directional transmission of data and electricity.'),
(12, 'Power grid', 'Power grid(Kandy)', 'A network of electrical transmission lines connecting.', '$100 million', '25.04.2022', 'Flexibility', 'The electricity grid allows a power system to use a diversity of resources, even if they are located far away from where the power is needed.'),
(14, 'Electrical grid', 'Electrical grid(Matale)', 'An electrical grid is an interconnected network for electricity delivery from producers to consumers.', '$120 million', '15.05.2022', 'Efficiency', 'The electrical grid is the intricate system designed to provide electricity all the way from its generation to the customers that use it for their daily needs. ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
