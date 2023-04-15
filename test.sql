-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 11:27 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `pricing`
--

CREATE TABLE `pricing` (
  `store_id` int(11) NOT NULL,
  `sku` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `pricing`
--

INSERT INTO `pricing` (`store_id`, `sku`, `product_name`, `price`, `date`) VALUES
(1, 1, 'Oats', 133, '2023-04-14'),
(2, 12, 'Bread', 100, '2023-04-12'),
(3, 11, 'cheese', 300, '2023-01-04'),
(4, 34, 'Wheat', 133, '2023-04-12'),
(5, 111, 'Mayo', 500, '2023-03-27'),
(6, 776, 'Oil', 743, '2023-04-14'),
(7, 335, 'Butter', 222, '2023-04-14'),
(8, 743, 'Ghee', 987, '2022-11-10'),
(9, 344, 'Milk', 123, '2023-04-14'),
(10, 743, 'Ghee', 987, '2022-11-10'),
(11, 344, 'Milk', 123, '2023-04-14'),
(12, 743, 'Ghee', 987, '2022-11-10'),
(13, 344, 'Milk', 123, '2023-04-14');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
