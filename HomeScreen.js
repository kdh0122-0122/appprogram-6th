import React, { useState, useEffect } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS, FONT, SHADOW } from '../utils/theme';

export default function HomeScreen({ navigation }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return { text: '좋은 아침이에요', emoji: '🌅' };
    if (hour < 18) return { text: '점심 드셨나요?', emoji: '🥗' };
    return { text: '오늘 하루 수고했어요', emoji: '🌙' };
  };
