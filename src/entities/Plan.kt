package com.example.myapplication.model

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Plan(
    val name: String,
    val features: List<String>,
    val price: String,
    val planColor: String
) : Parcelable
