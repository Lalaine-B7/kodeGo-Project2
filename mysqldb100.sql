-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2022 at 10:16 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysqldb100`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `ID` int(5) NOT NULL,
  `CAR_NAME` varchar(200) NOT NULL,
  `BRAND` varchar(200) NOT NULL,
  `BODY_TYPE` varchar(200) NOT NULL,
  `YEAR` int(4) NOT NULL,
  `TRANSMISSION` varchar(200) NOT NULL,
  `TYPE` varchar(200) NOT NULL,
  `ENGINE` varchar(200) NOT NULL,
  `SEAT` int(200) NOT NULL,
  `COLOR` varchar(100) NOT NULL,
  `CONDITION` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`ID`, `CAR_NAME`, `BRAND`, `BODY_TYPE`, `YEAR`, `TRANSMISSION`, `TYPE`, `ENGINE`, `SEAT`, `COLOR`, `CONDITION`) VALUES
(11101, 'BMW X1', 'BMW', 'crossover SUV', 2002, 'Automatic', 'fuel', 'engine1', 5, 'gray', 'no side mirrors'),
(11102, 'BMW X4', 'BMW', 'crossover', 2018, 'automatic', 'fuel', 'engine2', 5, 'red', 'missing wheel1'),
(11103, 'wddsds', 'wqwqwq', 'wqwqwq', 12221, 'sasasa', 'saasa', 'sasas', 3, 'sasasa', 'sasasa');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `USERID` int(6) NOT NULL,
  `USERNAME` varchar(200) NOT NULL,
  `PASSWORD` varchar(200) NOT NULL,
  `FIRST_NAME` varchar(200) NOT NULL,
  `LAST_NAME` varchar(200) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PHONE` int(50) NOT NULL,
  `POSITION` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`USERID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11104;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `USERID` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202201;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
