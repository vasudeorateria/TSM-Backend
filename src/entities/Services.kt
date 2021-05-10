package com.example.myapplication.model

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Services(
    val name: String,
    val image: String,
    val description: String,
    val highlights: List<Highlight>,
    val plans: List<Plan>
) : Parcelable